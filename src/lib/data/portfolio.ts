export interface Stat {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
  logoText: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  architecture: string;
  features: string[];
  caseStudy: {
    challenge: string;
    solution: string;
    result: string;
  };
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured: boolean;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
}

export const personalInfo = {
  name: "Kulveer Singh",
  title: "Technical Project Manager & Senior Full Stack Developer",
  company: "Senior Full Stack Developer",
  tagline: "Senior Software Developer | Senior Full Stack Developer | Laravel | PHP | MySQL | Docker | REST APIs",
  introduction: "Results-driven Technical Project Manager and Senior Full Stack Developer with 15+ years of experience designing, developing, deploying, and maintaining scalable web applications, enterprise software, ERP/CRM systems, and SaaS products. Currently leading cross-functional teams as a Senior Full Stack Developer while remaining actively involved in software architecture and backend engineering.",
  email: "ksmunda@gmail.com",
  github: "https://github.com/ksmunda",
  linkedin: "https://www.linkedin.com/in/kulveer-singh/",
  whatsapp: "https://wa.me/919929533493",
  resumeUrl: "#"
};

export const statistics: Stat[] = [
  { label: "Years Experience", value: 15, suffix: "+", description: "In full-stack engineering & tech leadership" },
  { label: "Projects Delivered", value: 150, suffix: "+", description: "Enterprise, web & mobile systems" },
  { label: "AI & Tech Stack Tools", value: 25, suffix: "+", description: "Mastered for productivity & deployment" },
  { label: "Core Competencies", value: 30, suffix: "+", description: "Across backend, frontend, databases & DevOps" },
  { label: "Team Size Managed", value: 12, suffix: "+", description: "Engineers, QA, and UI/UX designers" }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend Development",
    skills: [
      { name: "Laravel", icon: "laravel" },
      { name: "PHP", icon: "php" },
      { name: "CodeIgniter", icon: "express" }, // mapped express icon to CodeIgniter representation
      { name: "REST API Development", icon: "api" },
      { name: "MVC Architecture / OOP", icon: "typescript" }
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "JavaScript (ES6+)", icon: "javascript" },
      { name: "HTML5 / CSS3", icon: "svelte" },
      { name: "Bootstrap / AJAX / jQuery", icon: "bootstrap" }
    ]
  },
  {
    category: "Server & DevOps",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "Linux Administration", icon: "linux" },
      { name: "Apache Web Server", icon: "aws" },
      { name: "Git / GitHub / Bitbucket", icon: "githubactions" }
    ]
  },
  {
    category: "Databases & CMS",
    skills: [
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB / SQLite", icon: "mongodb" },
      { name: "WordPress / WooCommerce", icon: "tailwind" } // mapped tailwind representation for CMS
    ]
  },
  {
    category: "AI Productivity",
    skills: [
      { name: "ChatGPT / Gemini / Claude", icon: "svelte" },
      { name: "GitHub Copilot", icon: "githubactions" },
      { name: "Prompt Engineering", icon: "typescript" }
    ]
  }
];

export const experiences: Experience[] = [
  {
    company: "Senior Full Stack Developer",
    role: "Technical Project Manager",
    duration: "January 2026 - Present",
    description: "Lead cross-functional software development teams for enterprise web applications, managing project planning, sprint execution, resource allocation, and timelines.",
    responsibilities: [
      "Participated in software architecture discussions, database design, and technical solution design.",
      "Reviewed application architecture and code standards, ensuring clean, optimized codebases.",
      "Guided developers on Laravel, PHP, REST APIs, MySQL, Docker, and application development best practices.",
      "Mentored junior developers, coordinated code reviews, and conducted deployment planning and release management.",
      "Worked closely with clients, business stakeholders, QA engineers, and UI/UX teams to align product specifications."
    ],
    techStack: ["Laravel", "PHP", "MySQL", "Docker", "REST APIs", "Git", "Agile/Scrum"],
    logoText: "FS"
  },
  {
    company: "Senior Full Stack Developer",
    role: "Project Manager",
    duration: "October 2025 - January 2026",
    description: "Managed multiple software development projects from initiation to deployment, coordinating engineering resources and stakeholder alignments.",
    responsibilities: [
      "Planned sprint activities, monitored project progress, and ensured timely delivery according to quality standards.",
      "Assisted technical teams in architecture planning, technical decision-making, and blocker resolution.",
      "Coordinated communications between development teams, clients, and business stakeholders."
    ],
    techStack: ["Laravel", "PHP", "MySQL", "Docker", "Project Management", "Agile"],
    logoText: "FS"
  },
  {
    company: "Senior Full Stack Developer",
    role: "Senior Software Developer",
    duration: "February 2025 - October 2025",
    description: "Designed and developed enterprise applications using Laravel, PHP, CodeIgniter, and WordPress while optimizing databases and backend performance.",
    responsibilities: [
      "Built scalable REST APIs and integrated third-party payment gateways and web services.",
      "Worked with React.js modules for frontend integration and UI sync.",
      "Utilized Docker for local development and deployment workflows, and collaborated with QA teams throughout the SDLC."
    ],
    techStack: ["Laravel", "PHP", "CodeIgniter", "WordPress", "React.js", "MySQL", "Docker", "REST APIs"],
    logoText: "FS"
  },
  {
    company: "NUVRO Technologies",
    role: "Founder & Senior Full Stack Developer",
    duration: "November 2009 - Present",
    description: "Founded and led a custom software agency, delivering 150+ software solutions including ERP, CRM, HRMS, LMS, and E-Commerce platforms for global startups and enterprise clients.",
    responsibilities: [
      "Designed and architected scalable Laravel-based enterprise solutions and RESTful API structures.",
      "Built cross-platform mobile applications using Flutter and frontend modules with React.js.",
      "Developed custom WordPress themes and plugins, managed complete SDLC, and provided solution architecture and technical consulting."
    ],
    techStack: ["Laravel", "PHP", "React.js", "Node.js", "Flutter", "MySQL", "WordPress", "WooCommerce", "AWS"],
    logoText: "NV"
  },
  {
    company: "Career Shapers",
    role: "Senior PHP Developer",
    duration: "September 2022 - February 2025",
    description: "Developed Laravel and WordPress applications, designed reusable backend modules, and led technical integrations with Australian clients.",
    responsibilities: [
      "Created high-performance REST APIs and optimized MySQL relational databases.",
      "Led small development teams, managed task assignments, and oversaw SEO and digital initiatives."
    ],
    techStack: ["Laravel", "PHP", "WordPress", "MySQL", "REST APIs", "SEO", "Team Leadership"],
    logoText: "CS"
  },
  {
    company: "Ideal Education Point",
    role: "PHP Developer & Computer Science Faculty",
    duration: "2019 - 2022",
    description: "Developed custom web modules while instructing students in computer science fundamentals, database design, and programming practices.",
    responsibilities: [
      "Coded core PHP modules and database schemas for internal school automation tools.",
      "Taught algorithms, web programming, and database management systems."
    ],
    techStack: ["PHP", "JavaScript", "HTML5", "CSS3", "MySQL", "Teaching"],
    logoText: "IE"
  },
  {
    company: "Various Organizations",
    role: "Web Developer / Trainer",
    duration: "2009 - 2019",
    description: "Constructed web solutions and custom scripts for multiple clients while training junior engineers in full-stack web technologies.",
    responsibilities: [
      "Developed dynamic websites using PHP, HTML, CSS, JavaScript, and jQuery.",
      "Instructed courses in web design, server scripting, and relational database systems."
    ],
    techStack: ["PHP", "JavaScript", "HTML/CSS", "MySQL", "jQuery", "Training"],
    logoText: "VO"
  }
];

export const projects: Project[] = [
  {
    id: "school-management",
    title: "School Management System",
    description: "A comprehensive SaaS platform facilitating school administration, multi-role dashboards (admin, teacher, student, parent), fee tracking, attendance, and exam management.",
    techStack: ["Laravel", "React.js", "MySQL", "REST APIs", "Bootstrap"],
    architecture: "Decoupled Single Page Application with RESTful API backend",
    features: [
      "Role-Based Access Control (RBAC) supporting 4 distinct user roles.",
      "Automated PDF report generation for grades, transcripts, and fee receipts.",
      "Real-time attendance tracking with instant SMS notifications to parents.",
      "Comprehensive fee portal with automated receipt generation and payment reminder system."
    ],
    caseStudy: {
      challenge: "Managing thousands of students, grades, and financial transactions across multiple schools resulted in data inconsistencies and manual operational delays.",
      solution: "Engineered a multi-tenant cloud application with a highly optimized relational database schema and clear data validation policies.",
      result: "Reduced administrative overhead by 40% and eliminated duplicate billing errors for partner educational institutions."
    },
    githubUrl: "https://github.com/ksmunda/school-management-system",
    liveUrl: "https://school-demo.nuvro.in",
    category: "Enterprise",
    featured: true
  },
  {
    id: "hospital-management",
    title: "Hospital Management Suite",
    description: "An integrated healthcare information system handling OPD scheduling, inpatient records, pharmacy inventory, lab reporting, and medical billing.",
    techStack: ["Laravel", "React.js", "PHP", "MySQL", "Docker"],
    architecture: "N-Tier Enterprise Architecture, secure local storage",
    features: [
      "Interactive doctor scheduling calendar with automated double-booking prevention.",
      "Digital health record vault with encrypted storage for patient privacy.",
      "Pharmacy stock manager with automated low-inventory alerts and order pipeline.",
      "Medical billing engine integrating insurance claims and digital invoices."
    ],
    caseStudy: {
      challenge: "Doctors and staff experienced delays retrieving patient records during emergency admissions, alongside manual pharmacy inventory errors.",
      solution: "Developed an index-optimized patient database with real-time web sockets for immediate sync across OPD, ward, and pharmacy desks.",
      result: "Brought patient check-in/lookup times down to under 3 seconds, significantly improving clinical workflow efficiency."
    },
    githubUrl: "https://github.com/ksmunda/hospital-management",
    liveUrl: "https://hospital-demo.nuvro.in",
    category: "Enterprise",
    featured: true
  },
  {
    id: "hrms",
    title: "Enterprise HRMS Platform",
    description: "A full-scale Human Resource Management System overseeing employee lifecycles, salary payrolls, attendance, performance reviews, and leave approvals.",
    techStack: ["PHP", "Laravel", "React.js", "MySQL", "Tailwind CSS"],
    architecture: "Decoupled enterprise payroll and management system",
    features: [
      "Dynamic salary structures with auto-calculated tax, bonuses, and deductibles.",
      "Timesheet updates and automated geo-fenced attendance marking.",
      "Leave approval workflows with customizable multi-level manager hierarchies.",
      "Performance appraisal builder supporting 360-degree feedback loops."
    ],
    caseStudy: {
      challenge: "HR managers wasted days each month manually calculating payroll, managing leave requests, and tracking attendance sheets.",
      solution: "Created an automated payroll calculation engine and a streamlined employee-manager portal.",
      result: "Cut monthly payroll processing time from 4 days to 15 minutes, with zero compliance errors."
    },
    githubUrl: "https://github.com/ksmunda/hrms-platform",
    liveUrl: "https://hrms-demo.nuvro.in",
    category: "Enterprise",
    featured: true
  },
  {
    id: "finance-management",
    title: "Finance & Accounting Ledger",
    description: "A double-entry accounting software featuring general ledgers, account reconciliations, budgeting, and automated financial statements.",
    techStack: ["Laravel", "PHP", "MySQL", "AJAX", "Bootstrap"],
    architecture: "ACID-compliant relational design with immutable transaction ledgers",
    features: [
      "Immutable transaction auditing ledger preventing retrofitted balance tampering.",
      "Automated bank reconciliation via CSV file imports and matching algorithms.",
      "Real-time Balance Sheet, Profit & Loss, and Cash Flow statement rendering.",
      "Multi-currency conversion with automatic daily exchange rate updates."
    ],
    caseStudy: {
      challenge: "Manual accounting procedures resulted in discrepancies, balancing delays, and vulnerability to security leaks.",
      solution: "Designed a strict double-entry ledger with absolute transaction integrity constraints and complete audit trails.",
      result: "Achieved 100% financial compliance and auditability, saving client finance teams hundreds of hours."
    },
    githubUrl: "https://github.com/ksmunda/finance-management",
    liveUrl: "https://finance-demo.nuvro.in",
    category: "Finance",
    featured: true
  },
  {
    id: "greenform",
    title: "GreenForm - Digital Auditing Tool",
    description: "A drag-and-drop form builder and inspection platform designed for offline field audits, ESG compliance, and data collection.",
    techStack: ["React.js", "Node.js", "MongoDB", "PWA Sync"],
    architecture: "Serverless backend API with progressive offline sync capabilities",
    features: [
      "Visual drag-and-drop builder for custom audits, checklists, and inspections.",
      "Full offline functionality (PWA) with local storage sync on internet reconnect.",
      "Automatic ESG compliance rating based on custom questionnaire parameters.",
      "Exportable inspection reports containing GPS coordinates and photo evidence."
    ],
    caseStudy: {
      challenge: "Field engineers couldn't log audits in remote areas lacking network connectivity, requiring manual paper entries and double typing.",
      solution: "Implemented local IndexedDB replication and background synchronization handlers to seamlessly sync data when connection is restored.",
      result: "Auditing teams saved over 20 hours per week in transcription and report-compiling efforts."
    },
    githubUrl: "https://github.com/ksmunda/greenform-inspections",
    liveUrl: "https://greenform.nuvro.in",
    category: "Utility",
    featured: true
  }
];

export const services: Service[] = [
  {
    title: "Enterprise Web Applications",
    description: "Building high-performance, fault-tolerant ERP, CRM, and SaaS systems tailored to complex business workflows.",
    icon: "layers",
    features: ["Custom ERP/CRM setups", "API orchestration & integrations", "Legacy migrations & system refactoring"]
  },
  {
    title: "Laravel & PHP Development",
    description: "Delivering secure, cleanly-structured, and highly maintainable PHP applications utilizing the latest Laravel standards.",
    icon: "code",
    features: ["Custom packages and API development", "Performance tuning and query caching", "Database optimization & design"]
  },
  {
    title: "Technical Project Management",
    description: "Directing engineering projects from scoping to rollout with Scrum/Agile, keeping scopes clear and releases on schedule.",
    icon: "users",
    features: ["Sprint planning and backlog grooming", "Cross-functional team alignment", "Risk management & mitigation"]
  },
  {
    title: "System Architecture Design",
    description: "Architecting cloud and database designs that resist high-volume traffic spike loads, ensuring complete data security.",
    icon: "cpu",
    features: ["Docker containerized deployments", "High availability database structures", "Web services & third-party integrations"]
  }
];

export const certifications: Certification[] = [
  {
    title: "Industrial Computer Accountant (ICA)",
    issuer: "ICA",
    date: "2005 - 2006"
  }
];

export const educationList: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "University of Rajasthan",
    duration: "2008 - 2011"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Maharaja Ganga Singh University",
    duration: "2005 - 2008"
  },
  {
    degree: "ITI - Computer Operator & Programming Assistant (COPA)",
    institution: "National Council for Vocational Training",
    duration: "2004 - 2005"
  }
];
