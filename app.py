import os
from flask import Flask, render_template, send_from_directory, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = "change-this-secret-key"

COMPANY = {
    "name": "ARASUTECH SOLUTION PTE LTD",
    "uen": "201611406D",
    "gst": "201611406D-PTE-01",
    "address": "Lorong 8,Toa Payoh,Singapore 310231",
    "phone1": "+65 8709 0767",
    "phone2": "+65 8709 0767",
    "email": "arasutech2016@gmail.com",
    "email2": "arasutech@yahoo.com",
    "website": "www.arasutech.com"
}

SERVICES = [
    {"title": "Electrical Engineering", "items": ["Residential, commercial and factory electrical installation", "HT/LV cable laying, testing, jointing and termination", "Sub-board and distribution board installation", "Switchgear and transformer testing and commissioning", "Service and maintenance of HV/LV equipment"]},
    {"title": "ELV & Security Systems", "items": ["CCTV wiring and installation", "Door access and security systems", "Telecommunication wiring", "SCV wiring and installation", "Integrated low-voltage solutions"]},
    {"title": "BMS & Instrumentation", "items": ["Building Management System installation", "SCADA and instrumentation systems", "Environmental control system works", "Automation and system integration", "Instrumentation and control system support"]},
    {"title": "Mechanical Engineering", "items": ["ACMV equipment installation and maintenance", "Plumbing and sanitary systems", "Fire protection systems", "Chiller plant and generator electrical works", "Integrated M&E project support"]}
]

PROJECTS = [
    {"name": "A&A Work at MOF", "type": "Electrical & ELV Works", "client": "Debenho Pte Ltd", "status": "Completed"},
    {"name": "A&A Work at MOE", "type": "Electrical & ELV Works", "client": "Debenho Pte Ltd", "status": "Completed"},
    {"name": "Novena Square 2 Basement 1 Tenant Power Provision", "type": "Electrical Works", "client": "Xin Boa Pte Ltd", "status": "Completed"},
    {"name": "Mandarin Orchard 33rd Storey 1600A MSB Backup Power", "type": "Electrical Works", "client": "Xin Boa Pte Ltd", "status": "Completed"},
    {"name": "HDB Public Housing Project at Sengkang", "type": "Electrical, FA & ELV Works", "client": "MES Electrical Engineering Pte Ltd", "status": "Completed"},
    {"name": "Suntec City Towers 1, 2, 3, 4 & 5", "type": "Electrical & ELV Works", "client": "Xin Boa Pte Ltd / Gennal", "status": "Completed 2022"},
    {"name": "JTC Logistic Hub at Tuas", "type": "Electrical & ELV Works", "client": "DLE M&E Pte Ltd / Kimly", "status": "Completed"},
    {"name": "Lot One Shopper Mall CCK", "type": "Electrical & ELV Works", "client": "Xin Boa Pte Ltd / Gennal", "status": "Completed"},
    {"name": "River Valley Green Substation", "type": "Fire Alarm Works", "client": "Link Force / SPPG", "status": "Completed"},
    {"name": "Dover Church Annex and Nursing Home at SJSM", "type": "Electrical & ELV Works", "client": "Kurihara Kogyo Co., Ltd", "status": "Completed"},
    {"name": "Changi Water Reclamation Plant", "type": "SCADA & Instrumentation System", "client": "Primustech Pte Ltd", "status": "Completed"},
    {"name": "Singapore Food Agency Techquest Building", "type": "BMS", "client": "Primustech Pte Ltd", "status": "Completed"},
    {"name": "4-In-1 Rail and Bus Depot", "type": "BMS / Environmental Control System", "client": "Primustech Pte Ltd", "status": "Completed"},
    {"name": "Mandai Lake Road – East Arrival Node (Commercial Blocks, Transport Hub & Indoor Attractions)", "type": "ELV Systems", "client": "Quantum Automation Pte Ltd", "status": "Completed"}
]

# VIDEOS shown in the "Videos" section of the website.
# YouTube: put only the video ID (the part after "v=" in the link).
#   Example link: https://www.youtube.com/watch?v=AbCdEf12345  ->  "AbCdEf12345"
# MP4 file: put the file in static/videos/ and use {"file": "name.mp4"}
# While this list is empty, the website shows "Videos coming soon."
VIDEOS = [
    # {"youtube": "AbCdEf12345", "title": "Suntec City electrical works"},
    # {"file": "site1.mp4", "title": "Switchgear testing"},
]

# ================= NEW HOME PAGE DESIGN (Arasutech Groups) =================

# Group companies shown in the top bar. Later, to use a real logo, put the
# image in static/images/logos/ and set "logo": "filename.png".
GROUP_COMPANIES = [
    {"short": "AC", "name": "Arasu Corporation", "tag": "Construction | Infrastructure | Projects · India", "color": "#d4a017", "logo": "arasu-corporation.png"},
    {"short": "AB", "name": "Arasutech Builders and Developers Pvt Ltd", "tag": "Builders | Developers | Real Estate", "color": "#1f6fb2", "logo": "arasutech-builders.png"},
    {"short": "AS", "name": "Arasutech Solution Pte Ltd", "tag": "M&E | Electrical | ELV | Manpower Supply · UEN 201611406D", "color": "#0a2f57", "logo": "ats.png"},
    {"short": "V", "name": "Vertex Electrical Engineering Pte Ltd", "tag": "Electrical | ELV | Fire | Data | Security", "color": "#c8102e", "logo": "vertex.png"},
]

# Service icons strip under the banner (icon names match static/images/icons.svg symbols)
SERVICE_STRIP = [
    {"key": "electrical", "label": "Electrical Works", "icon": "bolt", "color": "#f5a623"},
    {"key": "acmv", "label": "ACMV & Ventilation", "icon": "snow", "color": "#1e88e5"},
    {"key": "fire", "label": "Fire Protection & Fire Alarm", "icon": "flame", "color": "#e53935"},
    {"key": "plumbing", "label": "Plumbing & Sanitary", "icon": "tap", "color": "#1976d2"},
    {"key": "elv", "label": "Data & ELV Systems", "icon": "server", "color": "#1565c0"},
    {"key": "led", "label": "LED Works & LED Walls", "icon": "screen", "color": "#0288d1"},
    {"key": "carpark", "label": "Car Park Management System", "icon": "parking", "color": "#0a2f57"},
    {"key": "construction", "label": "Construction Works", "icon": "building", "color": "#163a6b"},
    {"key": "builders", "label": "Builders & Developers", "icon": "home", "color": "#0f9d8a"},
    {"key": "interior", "label": "Interior Decoration", "icon": "sofa", "color": "#8e44ad"},
    {"key": "solar", "label": "Solar Panel Solutions", "icon": "sun", "color": "#f9a825"},
    {"key": "painting", "label": "Painting & Finishing Works", "icon": "brush", "color": "#e53935"},
]

# Project category cards. Upload photos to static/images/projects/ with these
# exact names. Until a photo is uploaded, a site photo from the gallery is shown.
PROJECT_CARDS = [
    {"key": "malls", "label": "Malls & Office Towers (Suntec City etc)", "image": "malls.jpg", "fallback": "photo1 (31).jpeg"},
    {"key": "nus", "label": "NUS Schools & Universities", "image": "nus.jpg", "fallback": "photo1 (46).jpeg"},
    {"key": "schools", "label": "Schools & Colleges", "image": "schools.jpg", "fallback": "photo1 (35).jpeg"},
    {"key": "mrt", "label": "MRT Projects", "image": "mrt.jpg", "fallback": "photo1 (7).jpeg"},
    {"key": "hdb", "label": "HDB Works", "image": "hdb.jpg", "fallback": "photo1 (20).jpeg"},
    {"key": "retail", "label": "Restaurants, Shops & Supermarkets", "image": "retail.jpg", "fallback": "photo1 (39).jpeg"},
    {"key": "gov", "label": "Government Offices (MOA, MU, MOE, MOF etc)", "image": "gov.jpg", "fallback": "photo1 (34).jpeg"},
    {"key": "halls", "label": "Convention Halls & Commercial Blocks", "image": "halls.jpg", "fallback": "photo1 (49).jpeg"},
]

# Big banner photo: upload as static/images/hero.jpg (wide photo, about 1920x900)
HERO_IMAGE = "hero.jpg"
HERO_FALLBACK = "photo1 (7).jpeg"


def static_image(path, fallback):
    """Return the uploaded image if it exists, otherwise the fallback photo."""
    if os.path.exists(os.path.join(app.static_folder, "images", path)):
        return "images/" + path
    return "images/" + fallback


def home_design():
    cards = [dict(c, src=static_image("projects/" + c["image"], c["fallback"])) for c in PROJECT_CARDS]
    return {
        "group_companies": GROUP_COMPANIES,
        "service_strip": SERVICE_STRIP,
        "project_cards": cards,
        "hero_image": static_image(HERO_IMAGE, HERO_FALLBACK),
    }


# Photos to hide from the website gallery (file stays in the folder, just not shown)
HIDDEN_PHOTOS = ["photo1 (8).jpeg", "photo1 (18).jpeg", "photo1 (19).jpeg"]

def gallery_images():
    folder = os.path.join(app.static_folder, "images")
    allowed = {".jpg", ".jpeg", ".png", ".webp"}
    images = []
    if os.path.exists(folder):
        for filename in os.listdir(folder):
            lower = filename.lower()
            if any(lower.endswith(ext) for ext in allowed):
                if filename not in ["ATS logo.png", "arasu.png"] and filename not in HIDDEN_PHOTOS:
                    images.append(filename)
    # natural sort for photo1 (1).jpeg to photo1 (60).jpeg
    def sort_key(name):
        import re
        nums = re.findall(r"\d+", name)
        return int(nums[-1]) if nums else 9999
    return sorted(images, key=sort_key)

@app.route("/")
def home():
    return render_template("index.html", company=COMPANY, services=SERVICES, projects=PROJECTS, gallery=gallery_images(), videos=VIDEOS, **home_design())

@app.route("/profile")
def profile():
    return send_from_directory("static/downloads", "ARASUTECH_Company_Profile_2026.pdf", as_attachment=True)

@app.route("/contact", methods=["POST"])
def contact():
    print("New enquiry:", dict(request.form))
    flash("Thank you. Your enquiry has been received. We will contact you shortly.")
    return redirect(url_for("home") + "#contact")

if __name__ == "__main__":
    app.run(debug=True)
