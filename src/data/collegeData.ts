export type ProgramLevel = 'Undergraduate' | 'Postgraduate' | 'Research';

export interface AcademicProgram {
  id: string;
  code: string;
  title: string;
  degree: string;
  level: ProgramLevel;
  department: string;
  duration: string;
  intake: number;
  accreditation: string;
  pathway: string;
  summary: string;
  coreModules: string[];
  laboratories: string[];
  careerPaths: string[];
}

export interface PlacementSector {
  sector: string;
  companiesCount: number;
  offersCount: number;
  medianCtc: string;
  highestCtc: string;
  sharePercent: string;
}

export interface AlumniOutcome {
  name: string;
  batch: string;
  degree: string;
  role: string;
  organization: string;
  outcome: string;
}

export interface CampusFacility {
  id: string;
  figure: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: string;
  image: string;
  alt: string;
}

export interface InstitutionalNotice {
  id: string;
  refCode: string;
  category: 'Admissions' | 'Examinations' | 'Events';
  date: string;
  title: string;
  summary: string;
  fullText: string[];
  deadline?: string;
}

export const CAMPUS_IMAGES = {
  heroCampus: '/assets/aistudio/image_581473fa.png',
  roboticsLab: '/src/assets/images/skcet_robotics_lab_1794810570357.jpg',
  centralLibrary: '/src/assets/images/central_academic_library_1794810555369.jpg',
  amphitheatre: '/src/assets/images/campus_auditorium_cultural_1794810555730.jpg',
  convocationHall: '/src/assets/images/skcet_convocation_hall_1794810570446.jpg',
};

export const KEY_FACTS = [
  {
    value: '1998',
    label: 'Year Established',
    detail: 'Sri Krishna Institutions, Kuniamuthur',
  },
  {
    value: 'NAAC A+',
    label: 'Institutional Grade',
    detail: 'Autonomous · Anna University Affiliated',
  },
  {
    value: '96.4%',
    label: 'Placement Record',
    detail: 'Class of 2025–26 Eligible Cohort',
  },
  {
    value: '42 Acres',
    label: 'Coimbatore Campus',
    detail: 'Palakkad Main Road, Sugunapuram',
  },
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'be-cse',
    code: 'SKC-UG-101',
    title: 'Computer Science and Engineering',
    degree: 'B.E.',
    level: 'Undergraduate',
    department: 'School of Computing',
    duration: '4 Years',
    intake: 240,
    accreditation: 'NBA Accredited',
    pathway: 'TNEA Counselling / Management Quota',
    summary:
      'Foundational systems engineering, distributed computing, compiler architecture, and full-stack software engineering with industry-mentored studio projects every semester.',
    coreModules: [
      'Data Structures & Algorithmic Design',
      'Operating Systems & Kernel Architecture',
      'Distributed Cloud Systems & Microservices',
      'Database Internals & Query Optimization',
    ],
    laboratories: [
      'Enterprise Cloud & DevOps Studio',
      'Systems Programming & Linux Cluster Lab',
    ],
    careerPaths: [
      'Systems Software Engineer',
      'Cloud Infrastructure Architect',
      'Backend Product Developer',
    ],
  },
  {
    id: 'btech-aids',
    code: 'SKC-UG-102',
    title: 'Artificial Intelligence and Data Science',
    degree: 'B.Tech.',
    level: 'Undergraduate',
    department: 'School of Computing',
    duration: '4 Years',
    intake: 180,
    accreditation: 'AICTE Approved',
    pathway: 'TNEA Counselling / Management Quota',
    summary:
      'Mathematical foundations of statistical inference, deep neural architectures, natural language processing, and scalable data engineering pipelines.',
    coreModules: [
      'Probability, Linear Algebra & Optimization',
      'Statistical Machine Learning',
      'Deep Learning & Computer Vision',
      'Large-Scale Data Engineering',
    ],
    laboratories: [
      'GPU Compute & Machine Intelligence Lab',
      'Applied Data Analytics Studio',
    ],
    careerPaths: [
      'Machine Learning Engineer',
      'Applied Data Scientist',
      'Decision Systems Analyst',
    ],
  },
  {
    id: 'be-cyber',
    code: 'SKC-UG-103',
    title: 'Computer Science and Cyber Security',
    degree: 'B.E.',
    level: 'Undergraduate',
    department: 'School of Computing',
    duration: '4 Years',
    intake: 60,
    accreditation: 'AICTE Approved',
    pathway: 'TNEA Counselling / Management Quota',
    summary:
      'Applied cryptography, network defense, digital forensics, and secure software lifecycle engineering designed with enterprise security operations teams.',
    coreModules: [
      'Applied Cryptography & Protocols',
      'Network Intrusion Detection & Forensics',
      'Web & Cloud Application Security',
      'Secure Systems Auditing',
    ],
    laboratories: [
      'Cyber Defense & Packet Analysis Range',
      'Digital Forensics Workstation Lab',
    ],
    careerPaths: [
      'Security Operations Engineer',
      'Application Security Analyst',
      'Network Defence Specialist',
    ],
  },
  {
    id: 'be-ece',
    code: 'SKC-UG-201',
    title: 'Electronics and Communication Engineering',
    degree: 'B.E.',
    level: 'Undergraduate',
    department: 'School of Electrical & Electronics',
    duration: '4 Years',
    intake: 180,
    accreditation: 'NBA Accredited',
    pathway: 'TNEA Counselling / Management Quota',
    summary:
      'VLSI chip design, embedded firmware, RF & microwave communication, and real-time signal processing backed by semiconductor design toolchains.',
    coreModules: [
      'Analog & Digital Integrated Circuits',
      'CMOS VLSI Design & Verification',
      'Embedded Real-Time Operating Systems',
      'Wireless & Optical Communication',
    ],
    laboratories: [
      'Cadence VLSI & ASIC Design Centre',
      'Embedded Microcontrollers & IoT Lab',
    ],
    careerPaths: [
      'RTL Design & Verification Engineer',
      'Embedded Firmware Engineer',
      'Telecom Systems Specialist',
    ],
  },
  {
    id: 'be-mct',
    code: 'SKC-UG-301',
    title: 'Mechatronics and Robotics Engineering',
    degree: 'B.E.',
    level: 'Undergraduate',
    department: 'School of Mechanical Sciences',
    duration: '4 Years',
    intake: 60,
    accreditation: 'NBA Accredited',
    pathway: 'TNEA Counselling / Management Quota',
    summary:
      'Interdisciplinary training uniting precision mechanical kinematics, industrial PLC automation, sensor fusion, and autonomous robotic manipulators for Coimbatore’s manufacturing corridor.',
    coreModules: [
      'Kinematics & Dynamics of Machinery',
      'Industrial Automation & PLC Control',
      'Autonomous Mobile Robotics & ROS',
      'Hydraulics, Pneumatics & Actuation',
    ],
    laboratories: [
      'Centre for Robotics & Autonomous Systems',
      'CNC & Industrial Mechatronics Workshop',
    ],
    careerPaths: [
      'Robotics Control Engineer',
      'Industrial Automation Specialist',
      'R&D Mechatronics Designer',
    ],
  },
  {
    id: 'be-mech',
    code: 'SKC-UG-302',
    title: 'Mechanical Engineering',
    degree: 'B.E.',
    level: 'Undergraduate',
    department: 'School of Mechanical Sciences',
    duration: '4 Years',
    intake: 120,
    accreditation: 'NBA Accredited',
    pathway: 'TNEA Counselling / Management Quota',
    summary:
      'Thermodynamics, finite element structural analysis, additive manufacturing, and electric powertrain engineering closely integrated with Coimbatore’s foundry and pump industries.',
    coreModules: [
      'Applied Thermodynamics & Heat Transfer',
      'CAD/CAM & Finite Element Analysis',
      'Precision Manufacturing & Metrology',
      'Electric & Hybrid Vehicle Systems',
    ],
    laboratories: [
      'CAD/CAE Simulation & Additive Lab',
      'Thermal Sciences & Fluid Machinery Hall',
    ],
    careerPaths: [
      'Design & Simulation Engineer',
      'Manufacturing Operations Lead',
      'Automotive Powertrain Engineer',
    ],
  },
  {
    id: 'be-eee',
    code: 'SKC-UG-202',
    title: 'Electrical and Electronics Engineering',
    degree: 'B.E.',
    level: 'Undergraduate',
    department: 'School of Electrical & Electronics',
    duration: '4 Years',
    intake: 120,
    accreditation: 'NBA Accredited',
    pathway: 'TNEA Counselling / Management Quota',
    summary:
      'Power electronics, smart microgrids, renewable energy integration, and industrial motor drives suited for energy utilities and EV propulsion enterprises.',
    coreModules: [
      'Power Systems Analysis & Protection',
      'Power Electronics & Motor Drives',
      'Solar & Wind Energy Integration',
      'Control Systems Engineering',
    ],
    laboratories: [
      'High-Voltage & Power Electronics Lab',
      'Smart Grid & Renewable Microgrid Testbed',
    ],
    careerPaths: [
      'Power Systems Engineer',
      'EV Drive Electronics Developer',
      'Grid Automation Specialist',
    ],
  },
  {
    id: 'mba-mgmt',
    code: 'SKC-PG-401',
    title: 'Master of Business Administration',
    degree: 'MBA',
    level: 'Postgraduate',
    department: 'School of Management',
    duration: '2 Years',
    intake: 120,
    accreditation: 'NBA Accredited',
    pathway: 'TANCET / MAT / CAT Score',
    summary:
      'Case-method management education with dual specializations across Financial Analytics, Operations & Supply Chain, People Strategy, and Technology Product Management.',
    coreModules: [
      'Corporate Finance & Capital Valuation',
      'Operations & Supply Chain Analytics',
      'Marketing Strategy & Consumer Insights',
      'Enterprise Governance & Business Law',
    ],
    laboratories: [
      'Bloomberg-Model Financial Markets Lab',
      'Business Simulation & Case Colloquium',
    ],
    careerPaths: [
      'Management Consultant',
      'Product & Operations Manager',
      'Corporate Financial Analyst',
    ],
  },
  {
    id: 'me-vlsi',
    code: 'SKC-PG-205',
    title: 'Applied Electronics and VLSI Design',
    degree: 'M.E.',
    level: 'Postgraduate',
    department: 'School of Electrical & Electronics',
    duration: '2 Years',
    intake: 18,
    accreditation: 'AICTE Approved',
    pathway: 'GATE / TANCET Score',
    summary:
      'Advanced postgraduate specialization in physical IC layout, low-power System-on-Chip synthesis, FPGA prototyping, and analog mixed-signal verification.',
    coreModules: [
      'Low-Power SoC Architecture',
      'Physical Design & Static Timing Analysis',
      'SystemVerilog & UVM Verification',
      'RF Integrated Circuit Design',
    ],
    laboratories: [
      'Sub-Micron VLSI Synthesis Studio',
      'FPGA Hardware Prototyping Bench',
    ],
    careerPaths: [
      'Physical Design Engineer',
      'ASIC Verification Lead',
      'Semiconductor R&D Researcher',
    ],
  },
  {
    id: 'phd-research',
    code: 'SKC-RS-901',
    title: 'Doctoral Research Programmes',
    degree: 'Ph.D.',
    level: 'Research',
    department: 'Anna University Recognized Centres',
    duration: '3–5 Years',
    intake: 35,
    accreditation: 'Anna University Nodal Centre',
    pathway: 'Anna University Ph.D. Entrance & Interview',
    summary:
      'Full-time and part-time doctoral fellowships across Computer Science, Electronics, Mechanical Engineering, and Management with institutional teaching assistantships.',
    coreModules: [
      'Research Methodology & Quantitative Rigor',
      'Peer-Reviewed Journal & Patent Filing',
      'Funded DST / AICTE / DRDO Grant Projects',
      'Doctoral Colloquium & Thesis Defence',
    ],
    laboratories: [
      'Central Analytical Instrumentation Facility',
      'High-Performance Computing Research Node',
    ],
    careerPaths: [
      'University Faculty & Principal Investigator',
      'Industrial R&D Scientist',
      'Deep-Tech Patent Fellow',
    ],
  },
];

export const PLACEMENT_SECTORS: PlacementSector[] = [
  {
    sector: 'Enterprise Software & Cloud Engineering',
    companiesCount: 98,
    offersCount: 642,
    medianCtc: '₹8.2 LPA',
    highestCtc: '₹44.0 LPA',
    sharePercent: '54.2%',
  },
  {
    sector: 'Core Engineering, Automotive & Semiconductors',
    companiesCount: 64,
    offersCount: 284,
    medianCtc: '₹6.8 LPA',
    highestCtc: '₹22.5 LPA',
    sharePercent: '24.0%',
  },
  {
    sector: 'FinTech, Analytics & Product Systems',
    companiesCount: 42,
    offersCount: 148,
    medianCtc: '₹9.4 LPA',
    highestCtc: '₹32.0 LPA',
    sharePercent: '12.5%',
  },
  {
    sector: 'Management Consulting & Operations',
    companiesCount: 36,
    offersCount: 110,
    medianCtc: '₹6.5 LPA',
    highestCtc: '₹14.8 LPA',
    sharePercent: '9.3%',
  },
];

export const RECRUITER_PARTNERS = [
  { name: 'Zoho Corporation', domain: 'Product & Cloud Software', hires: '68 offers (2025–26)' },
  { name: 'Bosch Global Software Technologies', domain: 'Embedded & Mobility', hires: '54 offers (2025–26)' },
  { name: 'Caterpillar India', domain: 'Core Mechanical & Powertrain', hires: '31 offers (2025–26)' },
  { name: 'PayPal India', domain: 'FinTech & Distributed Systems', hires: '19 offers (2025–26)' },
  { name: 'Mercedes-Benz R&D India', domain: 'Automotive Control & AI', hires: '22 offers (2025–26)' },
  { name: 'L&T Technology Services', domain: 'Engineering R&D', hires: '46 offers (2025–26)' },
  { name: 'Tata Consultancy Services', domain: 'Digital & Enterprise Systems', hires: '142 offers (2025–26)' },
  { name: 'Infosys', domain: 'Specialist Programmer Track', hires: '118 offers (2025–26)' },
  { name: 'Cognizant', domain: 'Cloud & Data Engineering', hires: '96 offers (2025–26)' },
  { name: 'Ashok Leyland', domain: 'EV & Heavy Commercial Design', hires: '24 offers (2025–26)' },
  { name: 'Deloitte India', domain: 'Risk & Technology Advisory', hires: '28 offers (2025–26)' },
  { name: 'Texas Instruments Partner Labs', domain: 'Analog & VLSI Systems', hires: '14 offers (2025–26)' },
];

export const ALUMNI_TESTIMONIALS: AlumniOutcome[] = [
  {
    name: 'Kavya Balasubramanian',
    batch: 'Class of 2024',
    degree: 'B.E. Computer Science and Engineering',
    role: 'Software Engineer',
    organization: 'PayPal India, Chennai',
    outcome:
      'Transitioned from our third-year distributed systems studio directly into a six-month engineering internship and full-time platform role working on high-throughput payment settlement services.',
  },
  {
    name: 'Arvindhan Natarajan',
    batch: 'Class of 2023',
    degree: 'B.E. Mechatronics Engineering',
    role: 'Automation Systems Engineer',
    organization: 'Bosch Global Software Technologies, Coimbatore',
    outcome:
      'Built an autonomous vision-guided palletizer in the Kuniamuthur Robotics Lab that served as his capstone portfolio and led to an early R&D placement offer.',
  },
  {
    name: 'Meenakshi Sundaram',
    batch: 'Class of 2024',
    degree: 'MBA (Finance & Business Analytics)',
    role: 'Operations Strategy Associate',
    organization: 'Deloitte India, Bengaluru',
    outcome:
      'Combined case-method coursework with live supply-chain consulting engagements for Tiruppur and Coimbatore manufacturing clusters prior to campus recruitment.',
  },
];

export const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: 'robotics',
    figure: 'Fig. 1',
    title: 'Centre for Robotics & Autonomous Systems',
    subtitle: '24-Workstation Mechatronics & Embedded Fabrication Wing',
    description:
      'Outfitted with six-axis industrial robotic manipulators, high-speed oscilloscopes, FPGA prototyping benches, and automated PCB milling stations where undergraduate teams build hardware prototypes from first semester.',
    metrics: '14 Sponsored Industry Labs · 38 Student Patents Filed (2024–26)',
    image: CAMPUS_IMAGES.roboticsLab,
    alt: 'Students collaborating with a robotic arm and oscilloscopes inside the Sri Krishna College robotics laboratory',
  },
  {
    id: 'library',
    figure: 'Fig. 2',
    title: 'Dr. Kalam Central Academic Library',
    subtitle: 'Quiet Timber Reading Hall & Digital Research Commons',
    description:
      'Spanning 32,000 square feet across two sunlit levels, the Central Library houses print monographs, archival theses, and campus-wide institutional subscriptions to IEEE Xplore, ACM Digital Library, and Springer.',
    metrics: '84,500+ Print Volumes · 16,400+ Indexed E-Journals · Open 8:00 AM – 9:00 PM',
    image: CAMPUS_IMAGES.centralLibrary,
    alt: 'Sunlit two-level timber and stone central library at Sri Krishna College with students studying',
  },
  {
    id: 'amphitheatre',
    figure: 'Fig. 3',
    title: 'Stone Amphitheatre & Student Quadrangle',
    subtitle: 'Cultural Forums, Technical Clubs & Annual Symposiums',
    description:
      'Shaded by native rain trees at the heart of the Kuniamuthur campus, the stepped granite amphitheatre hosts departmental colloquia, classical arts evenings, hackathon briefings, and the annual Kriya intercollegiate conclave.',
    metrics: '28 Active Student Clubs · 1,200-Seat Open-Air Quadrangle',
    image: CAMPUS_IMAGES.amphitheatre,
    alt: 'Students conversing on stepped stone seating in the shaded brick colonnade courtyard',
  },
  {
    id: 'convocation',
    figure: 'Fig. 4',
    title: 'Main Assembly & Convocation Hall',
    subtitle: 'Annual Graduation & Distinguished Lecture Series',
    description:
      'Acoustically engineered timber-paneled auditorium hosting the annual Convocation Ceremony, international engineering conferences, and industry leadership lectures throughout the academic calendar.',
    metrics: '1,800-Seat Auditorium · 4,200+ Alumni Network Worldwide',
    image: CAMPUS_IMAGES.convocationHall,
    alt: 'Graduating students in academic regalia holding degree scrolls inside the timber-paneled convocation hall',
  },
];

export const CAMPUS_NOTICES: InstitutionalNotice[] = [
  {
    id: 'notice-adm-2026',
    refCode: 'CIR/ADM/2026-04',
    category: 'Admissions',
    date: 'November 12, 2026',
    title: 'Admissions Open for 2026–27 Academic Cohort (B.E. / B.Tech. / MBA / M.E.)',
    summary:
      'Online registration and on-campus academic counselling sessions are now open at the Kuniamuthur Admissions Office for the 2026–27 intake.',
    deadline: 'Counselling Desk Open Mon–Sat, 9:00 AM – 5:00 PM IST',
    fullText: [
      'Sri Krishna College of Engineering and Technology (Autonomous), Coimbatore invites applications and TNEA counselling enquiries for the 2026–27 academic session across all Undergraduate (B.E. / B.Tech.) and Postgraduate (MBA / M.E.) programmes.',
      'Merit scholarships ranging from 25% to 100% tuition fee waiver are available for candidates securing top state-level qualifying ranks, national Olympiad distinctions, and recognised sports representation.',
      'Prospective students and parents may schedule a guided tour of the Robotics Studio, Central Library, and Residential Hostels in Kuniamuthur directly through the online application portal.',
    ],
  },
  {
    id: 'notice-exam-nov',
    refCode: 'COE/AUT/2026-19',
    category: 'Examinations',
    date: 'November 08, 2026',
    title: 'Odd Semester End-Assessment Practical & Theory Schedule Published',
    summary:
      'Office of the Controller of Examinations has released the final hall allocation and laboratory viva timetable for III, V, and VII semester cohorts.',
    deadline: 'Theory Assessments Commence November 24, 2026',
    fullText: [
      'The Autonomous Office of the Controller of Examinations notifies all undergraduate and postgraduate students that the November–December 2026 End-Semester Examinations will commence from November 24, 2026.',
      'Hall tickets containing room numbers and subject codes are downloadable through the student ERP portal. Students with laboratory backlog registrations must verify batch timings with their respective Heads of Department before November 18, 2026.',
    ],
  },
  {
    id: 'notice-evt-symposium',
    refCode: 'RES/SYMP/2026-11',
    category: 'Events',
    date: 'November 04, 2026',
    title: 'Coimbatore Industrial Automation & Clean Mobility Conclave',
    summary:
      'Two-day technical symposium hosted jointly with Coimbatore automotive and precision manufacturing partners at the Main Assembly Hall.',
    deadline: 'December 05–06, 2026 · Registration Open for Student Papers',
    fullText: [
      'The School of Mechanical and Electrical Sciences is convening the annual Coimbatore Industrial Automation & Clean Mobility Conclave on December 5–6, 2026.',
      'Keynote sessions feature chief engineers from Bosch, Caterpillar, and regional EV powertrain firms, alongside live hardware demonstrations by final-year Mechatronics and ECE project teams.',
    ],
  },
  {
    id: 'notice-adm-lateral',
    refCode: 'CIR/ADM/2026-08',
    category: 'Admissions',
    date: 'October 29, 2026',
    title: 'Diploma Lateral Entry & Hostel Allotment Guidelines (2026–27)',
    summary:
      'Information bulletin for polytechnic diploma holders seeking direct second-year admission and residential hostel allocation.',
    deadline: 'Hostel Preference Window Closes Prior to Orientation',
    fullText: [
      'Candidates admitted under the Tamil Nadu Lateral Entry Engineering Admission (TNLEA) pathway are eligible for direct third-semester enrollment with bridge workshops in engineering mathematics.',
      'Separate residential hostels for men and women with reading rooms, high-speed campus Wi-Fi, and hygienic dining halls are allotted on campus on a first-confirmed basis.',
    ],
  },
];
