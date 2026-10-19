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
    "email": "meyyarasu@ymail.com",
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
    {"name": "4-In-1 Rail and Bus Depot", "type": "BMS / Environmental Control System", "client": "Primustech Pte Ltd", "status": "Completed"}
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

def gallery_images():
    folder = os.path.join(app.static_folder, "images")
    allowed = {".jpg", ".jpeg", ".png", ".webp"}
    images = []
    if os.path.exists(folder):
        for filename in os.listdir(folder):
            lower = filename.lower()
            if any(lower.endswith(ext) for ext in allowed):
                if filename not in ["ATS logo.png", "arasu.png"]:
                    images.append(filename)
    # natural sort for photo1 (1).jpeg to photo1 (60).jpeg
    def sort_key(name):
        import re
        nums = re.findall(r"\d+", name)
        return int(nums[-1]) if nums else 9999
    return sorted(images, key=sort_key)

@app.route("/")
def home():
    return render_template("index.html", company=COMPANY, services=SERVICES, projects=PROJECTS, gallery=gallery_images(), videos=VIDEOS)

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
