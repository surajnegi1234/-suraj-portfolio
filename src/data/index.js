export const personalInfo = {
  name: 'Suraj Negi',
  role: 'Full Stack MERN Developer',
  tagline: 'Building scalable web applications with modern technologies.',
  location: 'Delhi, India',
  email: 'negisuraj438@gmail.com',
  phone: '+91 9650809586',
  github: 'https://github.com/surajnegi1234',
  linkedin: 'https://linkedin.com/in/suraj-negi-319bb522b',
  available: true,
};

export const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '3', label: 'Companies' },
  { value: '10+', label: 'Projects Shipped' },
  { value: '15+', label: 'Technologies' },
];

export const skills = [
  { name: 'React.js', level: 92, category: 'Frontend' },
  { name: 'Redux', level: 85, category: 'Frontend' },
  { name: 'JavaScript', level: 90, category: 'Frontend' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'Express.js', level: 88, category: 'Backend' },
  { name: 'MongoDB', level: 85, category: 'Database' },
  { name: 'Firebase', level: 82, category: 'Cloud' },
  { name: 'REST APIs', level: 90, category: 'Backend' },
  { name: 'Socket.IO', level: 80, category: 'Backend' },
  { name: 'JWT Auth', level: 87, category: 'Security' },
  { name: 'Git & GitHub', level: 88, category: 'Tools' },
];

export const experience = [
  {
    id: 1,
    company: 'Digibells Technologies',
    role: 'Backend Developer',
    period: 'Dec 2025 – May 2026',
    type: 'Full-time',
    location: 'Remote',
    color: '#06b6d4',
    description:
      'Built and deployed production backend services for a QR-based smart visitor management system, integrated into a Flutter mobile app published on the Google Play Store.',
    highlights: [
      'Developed REST APIs for authentication, QR activation, subscription management, and visitor tracking using Node.js, Express.js, and MongoDB',
      'Designed MongoDB schemas for users, subscriptions, QR codes, notifications, and visitor records',
      'Implemented secure authentication and authorization using JWT and bcrypt',
      'Integrated Firebase Cloud Messaging (FCM) for real-time visitor alerts and push notifications',
      'Built real-time communication workflows using Socket.IO and collaborated with Flutter developers to ship the app on Google Play Store',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Socket.IO', 'Firebase FCM', 'Flutter'],
  },
  {
    id: 2,
    company: 'Clarice Systems',
    role: 'Software Engineer',
    period: 'Nov 2024 – Nov 2025',
    type: 'Full-time',
    location: 'Bangalore',
    color: '#6366f1',
    description:
      'Engineered Presence — a production-grade multi-tenant attendance tracking web application with PWA capabilities, serving multiple enterprise organizations.',
    highlights: [
      'Built React 18 PWA with role-based dashboards, real-time data visualization, and GPS-based location tracking',
      'Architected scalable Node.js/Express.js backend with Firebase Cloud Functions, custom auth middleware, and express-validator',
      'Designed Firebase Firestore schemas for attendance & leave management with real-time sync and optimized security rules',
      'Developed cron jobs for monthly reports, email notifications via Nodemailer, and Excel report generation with ExcelJS',
      'Implemented device fingerprinting, rate limiting, CORS, geolocation verification with OpenStreetMap API',
    ],
    tech: ['React 18', 'PWA', 'Node.js', 'Express.js', 'Firebase', 'Nodemailer', 'ExcelJS'],
  },
  {
    id: 3,
    company: 'Impact QA',
    role: 'Software Development Intern',
    period: 'Apr 2024 – Aug 2024',
    type: 'Internship',
    location: 'Noida',
    color: '#8b5cf6',
    description:
      'Worked with DRDO-aligned teams on a synthetic test data generator and randomness test suite ensuring data quality and security standards.',
    highlights: [
      'Operated a synthetic test data generator and randomness test suite for ensuring data quality',
      'Performed 16 tests on synthetic data to assess randomness and ensure data integrity',
      'Interacted with clients, gathering requirements and providing feedback on testing outcomes',
      'Collaborated with DRDO teams to ensure tools met project specifications and security standards',
    ],
    tech: ['Testing', 'Data Quality', 'DRDO', 'Client Communication'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Payment Integration Platform',
    subtitle: 'Full-stack fintech solution',
    description:
      'Full-stack payment processing platform with secure RazorPay integration, JWT-based authentication, automated refund processing, and payment analytics. Built with optimized MongoDB schemas and comprehensive Joi validation.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'RazorPay API', 'JWT', 'Chakra UI', 'Joi', 'bcryptjs'],
    github: 'https://github.com/surajnegi1234',
    live: '#',
    color: '#06b6d4',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    featured: true,
    metrics: ['RazorPay Gateway', 'Auto Refunds', 'Analytics Dashboard'],
  },
  {
    id: 2,
    title: 'Presence — Attendance System',
    subtitle: 'Multi-tenant enterprise PWA',
    description:
      'Production-grade multi-tenant attendance tracking PWA with role-based dashboards, GPS verification, real-time sync, automated Excel/email reports, and device fingerprinting security.',
    tech: ['React 18', 'PWA', 'Firebase', 'Node.js', 'ExcelJS', 'Nodemailer', 'OpenStreetMap'],
    github: 'https://github.com/surajnegi1234',
    live: '#',
    color: '#6366f1',
    gradient: 'from-indigo-500/20 to-purple-500/20',
    featured: true,
    metrics: ['Offline-first PWA', 'GPS Tracking', 'Multi-tenant'],
  },
  {
    id: 3,
    title: 'DigiBells Visitor Management',
    subtitle: 'QR-based mobile backend',
    description:
      'Backend for a QR-based visitor management system with real-time Socket.IO notifications, Firebase Cloud Messaging, JWT auth, and subscription management. Mobile app live on Google Play Store.',
    tech: ['Node.js', 'MongoDB', 'Socket.IO', 'Firebase FCM', 'JWT', 'Express.js'],
    github: 'https://github.com/surajnegi1234',
    live: '#',
    color: '#8b5cf6',
    gradient: 'from-purple-500/20 to-pink-500/20',
    featured: false,
    metrics: ['Play Store Live', 'Real-time Alerts', 'QR Activation'],
  },
];

export const achievements = [
  { value: 1000, suffix: '+', label: 'Play Store Downloads', icon: 'FaGooglePlay' },
  { value: 2, suffix: '+', label: 'Years Experience', icon: 'FaBriefcase' },
  { value: 3, suffix: '', label: 'Companies Worked', icon: 'FaCode' },
  { value: 16, suffix: '+', label: 'QA Tests Performed', icon: 'FaStar' },
];

export const certifications = [
  { name: 'React Developer', issuer: 'Coding Ninjas', year: '2024', color: '#f97316' },
  { name: 'Front-end Web Developer', issuer: 'Coding Ninjas', year: '2024', color: '#6366f1' },
  { name: 'Back-end Web Developer', issuer: 'Coding Ninjas', year: '2024', color: '#8b5cf6' },
  { name: 'Google AI Essentials', issuer: 'Google', year: '2025', color: '#4285F4' },
];

export const education = [
  {
    degree: 'B.Tech in Mechanical Engineering',
    institution: 'Krishna Engineering College',
    location: 'Mohan Nagar, Ghaziabad',
    period: 'Aug 2018 – Jun 2022',
    color: '#6366f1',
  },
  {
    degree: '12th Grade — Science',
    institution: 'David Model Senior Secondary School',
    location: 'New Delhi',
    period: 'Apr 2017 – Mar 2018',
    color: '#8b5cf6',
  },
];
