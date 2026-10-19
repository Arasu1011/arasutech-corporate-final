/* ARASUTECH – language switcher (English / Tamil / Chinese / Malay)
   Any element with data-i18n="key" gets its text replaced.
   Inputs with data-i18n-placeholder="key" get their placeholder replaced.
   Project status cells (data-i18n-status) translate the word "Completed". */

const translations = {
  en: {
    brand_tagline: "Pure M&E Specialists",
    nav_services: "Services", nav_projects: "Projects", nav_director: "Director",
    nav_gallery: "Gallery", nav_videos: "Videos", nav_contact: "Contact",
    nav_profile: "Download Profile",

    hero_eyebrow: "Singapore M&E Engineering Contractor",
    hero_title: "Reliable Electrical, ELV, BMS & Instrumentation Partner",
    hero_sub: "Supporting main contractors with safe execution, quality workmanship and timely project delivery across Singapore infrastructure, commercial and industrial projects.",
    btn_download_profile: "Download Company Profile",
    btn_quote: "Request Quotation",
    stat_established: "Established", stat_projects: "Major Projects", stat_specialist: "Specialist",

    about_eyebrow: "About Arasutech",
    about_title: "Engineering solutions built on safety, quality and long-term partnerships.",
    about_text: "ARASUTECH SOLUTION PTE LTD provides comprehensive Electrical, Mechanical, ELV, BMS and Instrumentation services. We support main contractors, facility owners, industrial clients and project teams from installation to testing and commissioning.",

    services_eyebrow: "Our Services",
    services_title: "Complete M&E Support for Contractors",
    svc_1_title: "Electrical Engineering",
    svc_1_1: "Residential, commercial and factory electrical installation",
    svc_1_2: "HT/LV cable laying, testing, jointing and termination",
    svc_1_3: "Sub-board and distribution board installation",
    svc_1_4: "Switchgear and transformer testing and commissioning",
    svc_1_5: "Service and maintenance of HV/LV equipment",
    svc_2_title: "ELV & Security Systems",
    svc_2_1: "CCTV wiring and installation",
    svc_2_2: "Door access and security systems",
    svc_2_3: "Telecommunication wiring",
    svc_2_4: "SCV wiring and installation",
    svc_2_5: "Integrated low-voltage solutions",
    svc_3_title: "BMS & Instrumentation",
    svc_3_1: "Building Management System installation",
    svc_3_2: "SCADA and instrumentation systems",
    svc_3_3: "Environmental control system works",
    svc_3_4: "Automation and system integration",
    svc_3_5: "Instrumentation and control system support",
    svc_4_title: "Mechanical Engineering",
    svc_4_1: "ACMV equipment installation and maintenance",
    svc_4_2: "Plumbing and sanitary systems",
    svc_4_3: "Fire protection systems",
    svc_4_4: "Chiller plant and generator electrical works",
    svc_4_5: "Integrated M&E project support",

    why_eyebrow: "Why Choose Us",
    why_title: "A dependable subcontract partner for demanding site environments.",
    why_1_t: "Safety First", why_1_d: "Responsible work execution and site discipline.",
    why_2_t: "Quality Workmanship", why_2_d: "Durable technical execution focused on client satisfaction.",
    why_3_t: "On-Time Delivery", why_3_d: "Project-focused coordination with site teams.",
    why_4_t: "Versatile Team", why_4_d: "Electrical, ELV, BMS, ECS, fire alarm and instrumentation.",

    leader_eyebrow: "Leadership",
    director_title: "Director Profile",
    director_role: "Managing Director & M&E Specialist",
    director_bio: "Experienced M&E professional supporting main contractors in electrical, ELV, BMS, instrumentation, environmental control systems, testing and commissioning works.",

    projects_eyebrow: "Project Experience",
    projects_title: "Completed Project Track Record",
    th_project: "Project", th_scope: "Scope", th_client: "Client / Main Contractor", th_status: "Status",
    status_completed: "Completed",

    gallery_eyebrow: "Site Gallery",
    gallery_title: "Workers & Site Work Photos",

    videos_eyebrow: "Videos",
    videos_title: "Project & Site Work Videos",
    videos_empty: "Videos coming soon.",

    cta_title: "Share one professional website link with clients and main contractors.",
    cta_text: "View services, project experience, site photos and download the company profile directly.",
    btn_profile_pdf: "Download Profile PDF",

    contact_eyebrow: "Contact",
    contact_title: "Request a quotation or subcontract discussion",
    lbl_address: "Address:", lbl_phone: "Phone:", lbl_email: "Email:", lbl_tel: "Tel:",
    ph_name: "Your Name / Company", ph_email: "Email Address", ph_phone: "Phone Number",
    ph_message: "Tell us about your project requirement",
    btn_submit: "Submit Enquiry",
    rights: "All Rights Reserved"
  },

  ta: {
    brand_tagline: "M&E நிபுணர்கள்",
    nav_services: "சேவைகள்", nav_projects: "திட்டங்கள்", nav_director: "இயக்குநர்",
    nav_gallery: "புகைப்படங்கள்", nav_videos: "காணொளிகள்", nav_contact: "தொடர்பு",
    nav_profile: "சுயவிவரம் பதிவிறக்கம்",

    hero_eyebrow: "சிங்கப்பூர் M&E பொறியியல் ஒப்பந்ததாரர்",
    hero_title: "நம்பகமான மின், ELV, BMS மற்றும் கருவியியல் கூட்டாளர்",
    hero_sub: "சிங்கப்பூரின் உள்கட்டமைப்பு, வணிக மற்றும் தொழில்துறை திட்டங்களில் பாதுகாப்பான செயல்பாடு, தரமான வேலைப்பாடு மற்றும் குறித்த நேரத்தில் திட்ட நிறைவுடன் முதன்மை ஒப்பந்ததாரர்களுக்கு ஆதரவு அளிக்கிறோம்.",
    btn_download_profile: "நிறுவன சுயவிவரம் பதிவிறக்கம்",
    btn_quote: "விலைப்புள்ளி கோருங்கள்",
    stat_established: "நிறுவப்பட்டது", stat_projects: "முக்கிய திட்டங்கள்", stat_specialist: "நிபுணத்துவம்",

    about_eyebrow: "அரசுடெக் பற்றி",
    about_title: "பாதுகாப்பு, தரம் மற்றும் நீண்டகால கூட்டாண்மையின் அடிப்படையில் பொறியியல் தீர்வுகள்.",
    about_text: "ARASUTECH SOLUTION PTE LTD முழுமையான மின், இயந்திர, ELV, BMS மற்றும் கருவியியல் சேவைகளை வழங்குகிறது. நிறுவுதல் முதல் சோதனை மற்றும் இயக்கம் வரை முதன்மை ஒப்பந்ததாரர்கள், கட்டிட உரிமையாளர்கள், தொழில்துறை வாடிக்கையாளர்கள் மற்றும் திட்டக் குழுக்களுக்கு நாங்கள் ஆதரவு அளிக்கிறோம்.",

    services_eyebrow: "எங்கள் சேவைகள்",
    services_title: "ஒப்பந்ததாரர்களுக்கான முழுமையான M&E ஆதரவு",
    svc_1_title: "மின் பொறியியல்",
    svc_1_1: "குடியிருப்பு, வணிக மற்றும் தொழிற்சாலை மின் நிறுவல்",
    svc_1_2: "HT/LV கேபிள் பதித்தல், சோதனை, இணைப்பு மற்றும் முடிவிணைப்பு",
    svc_1_3: "துணை மற்றும் விநியோக பலகை நிறுவல்",
    svc_1_4: "சுவிட்ச்கியர் மற்றும் மின்மாற்றி சோதனை மற்றும் இயக்கம்",
    svc_1_5: "HV/LV சாதனங்களின் சேவை மற்றும் பராமரிப்பு",
    svc_2_title: "ELV மற்றும் பாதுகாப்பு அமைப்புகள்",
    svc_2_1: "CCTV வயரிங் மற்றும் நிறுவல்",
    svc_2_2: "கதவு அணுகல் மற்றும் பாதுகாப்பு அமைப்புகள்",
    svc_2_3: "தொலைத்தொடர்பு வயரிங்",
    svc_2_4: "SCV வயரிங் மற்றும் நிறுவல்",
    svc_2_5: "ஒருங்கிணைந்த குறைந்த மின்னழுத்த தீர்வுகள்",
    svc_3_title: "BMS மற்றும் கருவியியல்",
    svc_3_1: "கட்டிட மேலாண்மை அமைப்பு (BMS) நிறுவல்",
    svc_3_2: "SCADA மற்றும் கருவியியல் அமைப்புகள்",
    svc_3_3: "சுற்றுச்சூழல் கட்டுப்பாட்டு அமைப்பு பணிகள்",
    svc_3_4: "தானியக்கம் மற்றும் அமைப்பு ஒருங்கிணைப்பு",
    svc_3_5: "கருவியியல் மற்றும் கட்டுப்பாட்டு அமைப்பு ஆதரவு",
    svc_4_title: "இயந்திரப் பொறியியல்",
    svc_4_1: "ACMV சாதன நிறுவல் மற்றும் பராமரிப்பு",
    svc_4_2: "குழாய் மற்றும் சுகாதார அமைப்புகள்",
    svc_4_3: "தீ பாதுகாப்பு அமைப்புகள்",
    svc_4_4: "சில்லர் ஆலை மற்றும் ஜெனரேட்டர் மின் பணிகள்",
    svc_4_5: "ஒருங்கிணைந்த M&E திட்ட ஆதரவு",

    why_eyebrow: "ஏன் எங்களைத் தேர்வு செய்ய வேண்டும்",
    why_title: "சவாலான பணித்தளங்களுக்கு நம்பகமான துணை ஒப்பந்த கூட்டாளர்.",
    why_1_t: "பாதுகாப்பு முதலில்", why_1_d: "பொறுப்பான பணி செயல்பாடு மற்றும் பணித்தள ஒழுக்கம்.",
    why_2_t: "தரமான வேலைப்பாடு", why_2_d: "வாடிக்கையாளர் திருப்தியை மையமாகக் கொண்ட நீடித்த தொழில்நுட்ப செயல்பாடு.",
    why_3_t: "குறித்த நேரத்தில் நிறைவு", why_3_d: "பணித்தள குழுக்களுடன் திட்டம் சார்ந்த ஒருங்கிணைப்பு.",
    why_4_t: "பன்முகத் திறன் கொண்ட குழு", why_4_d: "மின், ELV, BMS, ECS, தீ எச்சரிக்கை மற்றும் கருவியியல்.",

    leader_eyebrow: "தலைமை",
    director_title: "இயக்குநர் சுயவிவரம்",
    director_role: "நிர்வாக இயக்குநர் & M&E நிபுணர்",
    director_bio: "மின், ELV, BMS, கருவியியல், சுற்றுச்சூழல் கட்டுப்பாட்டு அமைப்புகள், சோதனை மற்றும் இயக்கப் பணிகளில் முதன்மை ஒப்பந்ததாரர்களுக்கு ஆதரவு அளிக்கும் அனுபவம் வாய்ந்த M&E நிபுணர்.",

    projects_eyebrow: "திட்ட அனுபவம்",
    projects_title: "நிறைவு செய்யப்பட்ட திட்டங்களின் பட்டியல்",
    th_project: "திட்டம்", th_scope: "பணி வரம்பு", th_client: "வாடிக்கையாளர் / முதன்மை ஒப்பந்ததாரர்", th_status: "நிலை",
    status_completed: "நிறைவடைந்தது",

    gallery_eyebrow: "பணித்தள புகைப்படங்கள்",
    gallery_title: "பணியாளர்கள் & பணித்தள புகைப்படங்கள்",

    videos_eyebrow: "காணொளிகள்",
    videos_title: "திட்ட & பணித்தள காணொளிகள்",
    videos_empty: "காணொளிகள் விரைவில்.",

    cta_title: "வாடிக்கையாளர்கள் மற்றும் முதன்மை ஒப்பந்ததாரர்களுடன் ஒரே இணையதள இணைப்பைப் பகிருங்கள்.",
    cta_text: "சேவைகள், திட்ட அனுபவம், பணித்தள புகைப்படங்களைப் பார்த்து நிறுவன சுயவிவரத்தை நேரடியாகப் பதிவிறக்கலாம்.",
    btn_profile_pdf: "சுயவிவர PDF பதிவிறக்கம்",

    contact_eyebrow: "தொடர்பு",
    contact_title: "விலைப்புள்ளி அல்லது துணை ஒப்பந்தம் குறித்து கலந்துரையாட",
    lbl_address: "முகவரி:", lbl_phone: "தொலைபேசி:", lbl_email: "மின்னஞ்சல்:", lbl_tel: "தொலைபேசி:",
    ph_name: "உங்கள் பெயர் / நிறுவனம்", ph_email: "மின்னஞ்சல் முகவரி", ph_phone: "தொலைபேசி எண்",
    ph_message: "உங்கள் திட்டத் தேவையைத் தெரிவிக்கவும்",
    btn_submit: "விசாரணையைச் சமர்ப்பிக்கவும்",
    rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை"
  },

  zh: {
    brand_tagline: "专业机电工程",
    nav_services: "服务项目", nav_projects: "工程项目", nav_director: "董事简介",
    nav_gallery: "现场照片", nav_videos: "视频", nav_contact: "联系我们",
    nav_profile: "下载公司简介",

    hero_eyebrow: "新加坡机电工程承包商",
    hero_title: "可靠的电气、弱电、楼宇管理及仪表工程合作伙伴",
    hero_sub: "为新加坡基础设施、商业及工业项目的总承包商提供安全施工、优质工艺和准时交付。",
    btn_download_profile: "下载公司简介",
    btn_quote: "索取报价",
    stat_established: "成立年份", stat_projects: "主要项目", stat_specialist: "专业领域",

    about_eyebrow: "关于我们",
    about_title: "以安全、质量和长期合作为基础的工程解决方案。",
    about_text: "ARASUTECH SOLUTION PTE LTD 提供全面的电气、机械、弱电、楼宇管理系统及仪表工程服务。从安装到测试与调试，我们为总承包商、业主、工业客户及项目团队提供全程支持。",

    services_eyebrow: "服务项目",
    services_title: "为承包商提供全方位机电支持",
    svc_1_title: "电气工程",
    svc_1_1: "住宅、商业及工厂电气安装",
    svc_1_2: "高低压电缆敷设、测试、接驳及终端处理",
    svc_1_3: "分配电箱及配电盘安装",
    svc_1_4: "开关柜及变压器测试与调试",
    svc_1_5: "高低压设备维修与保养",
    svc_2_title: "弱电及安防系统",
    svc_2_1: "闭路电视（CCTV）布线及安装",
    svc_2_2: "门禁及安防系统",
    svc_2_3: "通讯布线",
    svc_2_4: "有线电视（SCV）布线及安装",
    svc_2_5: "综合弱电解决方案",
    svc_3_title: "楼宇管理系统及仪表",
    svc_3_1: "楼宇管理系统（BMS）安装",
    svc_3_2: "SCADA 及仪表系统",
    svc_3_3: "环境控制系统工程",
    svc_3_4: "自动化及系统集成",
    svc_3_5: "仪表及控制系统支持",
    svc_4_title: "机械工程",
    svc_4_1: "空调通风（ACMV）设备安装及保养",
    svc_4_2: "给排水及卫生系统",
    svc_4_3: "消防系统",
    svc_4_4: "冷水机组及发电机电气工程",
    svc_4_5: "综合机电项目支持",

    why_eyebrow: "选择我们的理由",
    why_title: "在严苛工地环境中值得信赖的分包合作伙伴。",
    why_1_t: "安全第一", why_1_d: "负责任的施工作业与工地纪律。",
    why_2_t: "优质工艺", why_2_d: "以客户满意为中心的持久技术执行。",
    why_3_t: "准时交付", why_3_d: "与现场团队紧密协调，专注项目进度。",
    why_4_t: "多元团队", why_4_d: "电气、弱电、楼宇管理、环境控制、火警及仪表。",

    leader_eyebrow: "领导团队",
    director_title: "董事简介",
    director_role: "董事总经理兼机电专家",
    director_bio: "经验丰富的机电专业人士，为总承包商提供电气、弱电、楼宇管理、仪表、环境控制系统以及测试与调试工程支持。",

    projects_eyebrow: "项目经验",
    projects_title: "已完成项目记录",
    th_project: "项目", th_scope: "工程范围", th_client: "客户 / 总承包商", th_status: "状态",
    status_completed: "已完成",

    gallery_eyebrow: "现场照片",
    gallery_title: "工人及现场施工照片",

    videos_eyebrow: "视频",
    videos_title: "项目及现场施工视频",
    videos_empty: "视频即将上线。",

    cta_title: "一个专业网站链接，轻松分享给客户和总承包商。",
    cta_text: "浏览服务项目、项目经验、现场照片，并可直接下载公司简介。",
    btn_profile_pdf: "下载公司简介 PDF",

    contact_eyebrow: "联系我们",
    contact_title: "索取报价或洽谈分包合作",
    lbl_address: "地址：", lbl_phone: "电话：", lbl_email: "电邮：", lbl_tel: "电话：",
    ph_name: "您的姓名 / 公司", ph_email: "电邮地址", ph_phone: "电话号码",
    ph_message: "请告诉我们您的项目需求",
    btn_submit: "提交询问",
    rights: "版权所有"
  },

  ms: {
    brand_tagline: "Pakar M&E Tulen",
    nav_services: "Perkhidmatan", nav_projects: "Projek", nav_director: "Pengarah",
    nav_gallery: "Galeri", nav_videos: "Video", nav_contact: "Hubungi",
    nav_profile: "Muat Turun Profil",

    hero_eyebrow: "Kontraktor Kejuruteraan M&E Singapura",
    hero_title: "Rakan Kongsi Elektrik, ELV, BMS & Instrumentasi yang Dipercayai",
    hero_sub: "Menyokong kontraktor utama dengan pelaksanaan yang selamat, mutu kerja berkualiti dan penyiapan projek tepat pada masanya bagi projek infrastruktur, komersial dan perindustrian di seluruh Singapura.",
    btn_download_profile: "Muat Turun Profil Syarikat",
    btn_quote: "Minta Sebut Harga",
    stat_established: "Ditubuhkan", stat_projects: "Projek Utama", stat_specialist: "Pakar",

    about_eyebrow: "Tentang Arasutech",
    about_title: "Penyelesaian kejuruteraan berteraskan keselamatan, kualiti dan perkongsian jangka panjang.",
    about_text: "ARASUTECH SOLUTION PTE LTD menyediakan perkhidmatan Elektrik, Mekanikal, ELV, BMS dan Instrumentasi yang menyeluruh. Kami menyokong kontraktor utama, pemilik bangunan, pelanggan industri dan pasukan projek dari pemasangan hingga ujian dan pentauliahan.",

    services_eyebrow: "Perkhidmatan Kami",
    services_title: "Sokongan M&E Lengkap untuk Kontraktor",
    svc_1_title: "Kejuruteraan Elektrik",
    svc_1_1: "Pemasangan elektrik kediaman, komersial dan kilang",
    svc_1_2: "Pemasangan, ujian, penyambungan dan penamatan kabel HT/LV",
    svc_1_3: "Pemasangan papan suis kecil dan papan agihan",
    svc_1_4: "Ujian dan pentauliahan gear suis dan pengubah",
    svc_1_5: "Servis dan penyelenggaraan peralatan HV/LV",
    svc_2_title: "Sistem ELV & Keselamatan",
    svc_2_1: "Pendawaian dan pemasangan CCTV",
    svc_2_2: "Sistem akses pintu dan keselamatan",
    svc_2_3: "Pendawaian telekomunikasi",
    svc_2_4: "Pendawaian dan pemasangan SCV",
    svc_2_5: "Penyelesaian voltan rendah bersepadu",
    svc_3_title: "BMS & Instrumentasi",
    svc_3_1: "Pemasangan Sistem Pengurusan Bangunan",
    svc_3_2: "Sistem SCADA dan instrumentasi",
    svc_3_3: "Kerja sistem kawalan persekitaran",
    svc_3_4: "Automasi dan integrasi sistem",
    svc_3_5: "Sokongan sistem instrumentasi dan kawalan",
    svc_4_title: "Kejuruteraan Mekanikal",
    svc_4_1: "Pemasangan dan penyelenggaraan peralatan ACMV",
    svc_4_2: "Sistem paip dan sanitari",
    svc_4_3: "Sistem perlindungan kebakaran",
    svc_4_4: "Kerja elektrik loji penyejuk dan penjana",
    svc_4_5: "Sokongan projek M&E bersepadu",

    why_eyebrow: "Mengapa Pilih Kami",
    why_title: "Rakan kongsi subkontrak yang boleh diharap untuk persekitaran tapak yang mencabar.",
    why_1_t: "Keselamatan Diutamakan", why_1_d: "Pelaksanaan kerja yang bertanggungjawab dan disiplin di tapak.",
    why_2_t: "Mutu Kerja Berkualiti", why_2_d: "Pelaksanaan teknikal yang tahan lama dan berfokuskan kepuasan pelanggan.",
    why_3_t: "Siap Tepat Pada Masanya", why_3_d: "Penyelarasan berfokuskan projek bersama pasukan tapak.",
    why_4_t: "Pasukan Serba Boleh", why_4_d: "Elektrik, ELV, BMS, ECS, penggera kebakaran dan instrumentasi.",

    leader_eyebrow: "Kepimpinan",
    director_title: "Profil Pengarah",
    director_role: "Pengarah Urusan & Pakar M&E",
    director_bio: "Profesional M&E berpengalaman yang menyokong kontraktor utama dalam kerja elektrik, ELV, BMS, instrumentasi, sistem kawalan persekitaran, ujian dan pentauliahan.",

    projects_eyebrow: "Pengalaman Projek",
    projects_title: "Rekod Projek Yang Telah Disiapkan",
    th_project: "Projek", th_scope: "Skop", th_client: "Pelanggan / Kontraktor Utama", th_status: "Status",
    status_completed: "Selesai",

    gallery_eyebrow: "Galeri Tapak",
    gallery_title: "Foto Pekerja & Kerja di Tapak",

    videos_eyebrow: "Video",
    videos_title: "Video Projek & Kerja di Tapak",
    videos_empty: "Video akan datang.",

    cta_title: "Kongsi satu pautan laman web profesional dengan pelanggan dan kontraktor utama.",
    cta_text: "Lihat perkhidmatan, pengalaman projek, foto tapak dan muat turun profil syarikat secara terus.",
    btn_profile_pdf: "Muat Turun Profil PDF",

    contact_eyebrow: "Hubungi",
    contact_title: "Minta sebut harga atau perbincangan subkontrak",
    lbl_address: "Alamat:", lbl_phone: "Telefon:", lbl_email: "E-mel:", lbl_tel: "Tel:",
    ph_name: "Nama / Syarikat Anda", ph_email: "Alamat E-mel", ph_phone: "Nombor Telefon",
    ph_message: "Beritahu kami keperluan projek anda",
    btn_submit: "Hantar Pertanyaan",
    rights: "Hak Cipta Terpelihara"
  }
};

const SUPPORTED = ["en", "ta", "zh", "ms"];

function setLanguage(lang) {
  if (!SUPPORTED.includes(lang)) lang = "en";
  const dict = translations[lang];
  const fallback = translations.en;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const text = dict[key] || fallback[key];
    if (text) el.textContent = text;   // if no translation exists, the original text stays
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const text = dict[key] || fallback[key];
    if (text) el.placeholder = text;
  });

  // Project status: "Completed" / "Completed 2022" -> translated word, year kept
  document.querySelectorAll("[data-i18n-status]").forEach(el => {
    if (!el.dataset.original) el.dataset.original = el.textContent.trim();
    el.textContent = el.dataset.original.replace(/Completed/i, dict.status_completed);
  });

  document.documentElement.lang = lang === "zh" ? "zh-Hans" : lang;
  document.documentElement.dataset.lang = lang;
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("langSelect");

  // Priority: ?lang=ta in the URL  >  last saved choice  >  English
  let lang = new URLSearchParams(location.search).get("lang");
  if (!lang) { try { lang = localStorage.getItem("lang"); } catch (e) {} }
  lang = SUPPORTED.includes(lang) ? lang : "en";

  if (select) {
    select.value = lang;
    select.addEventListener("change", e => setLanguage(e.target.value));
  }
  setLanguage(lang);
});
