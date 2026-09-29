import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PROFILE = {
  name: 'Yadunanda Kumar Murari',
  shortName: 'YADUNANDA',
  monogram: 'YM',
  title: 'Cybersecurity Student',
  roles: [
    'Security Research Enthusiast',
    'Aspiring SOC Analyst',
    'VAPT Learner',
    'CTF Player',
    'Secure Code Builder',
  ],
  location: 'Rajkot, Gujarat, India',
  email: 'yadunandakumarmurari@gmail.com',
  education: {
    university: 'Marwadi University',
    degree: 'B.Tech Computer Science (Cyber Security)',
    period: 'Sept 2024 – May 2028',
    focus: ['Networking', 'Operating Systems', 'Databases', 'Secure System Design'],
  },
  links: {
    linkedin: 'https://www.linkedin.com/in/yadunandakumar-murari-cybersecurity-intern/',
    github: 'https://github.com/yadunandakumar',
    tryhackme: 'https://tryhackme.com/p/yadunandakumarmurari',
    resume: '/assets/Yadunanda_Kumar_Murari_Resume.pdf',
  },
  summary:
    'Second-year Cyber Security student driven by curiosity about system internals and real-world threat mitigation. Actively developing an "attacker\'s mindset" through CTF challenges and labs to better understand vulnerabilities. Disciplined learner seeking internship opportunities in software development or cybersecurity to apply skills in Java, SQL, and secure system design.',
};

export const SKILLS = {
  recon: [
    { name: 'Nmap', level: 'operational', desc: 'Network discovery & port scanning' },
    { name: 'Wireshark', level: 'learning', desc: 'Packet analysis' },
    { name: 'Burp Suite', level: 'learning', desc: 'Web app testing' },
  ],
  defense: [
    { name: 'Snort', level: 'exploring', desc: 'IDS / IPS' },
    { name: 'Wazuh', level: 'exploring', desc: 'SIEM & endpoint detection' },
    { name: 'Linux Hardening', level: 'operational', desc: 'Secure configurations' },
  ],
  programming: [
    { name: 'Java', level: 'strong', desc: 'Core + Swing + JDBC' },
    { name: 'SQL', level: 'strong', desc: 'Queries, joins, security' },
    { name: 'Linux', level: 'strong', desc: 'CLI, scripting, permissions' },
    { name: 'Python', level: 'learning', desc: 'Automation & tooling' },
  ],
  concepts: [
    { name: 'Password Hashing', level: 'strong', desc: 'PBKDF2, salts, AES' },
    { name: 'Cryptography', level: 'operational', desc: 'Symmetric & hashing' },
    { name: 'OWASP Top 10', level: 'operational', desc: 'Web vulnerabilities' },
    { name: 'Secure Coding', level: 'operational', desc: 'Injection prevention' },
    { name: 'Networking', level: 'strong', desc: 'TCP/IP, protocols' },
  ],
};

export const PROJECTS = [
  {
    id: 'MISSION-001',
    codename: 'VAULTKEEPER',
    title: 'Secure Password Manager',
    status: 'OPERATIONAL',
    classification: 'CONFIDENTIAL',
    objective: 'Build a robust desktop application for secure credential management with strong cryptographic guarantees.',
    threat: 'Plaintext password storage, weak hashing, SQL injection, unauthorized recovery.',
    solution:
      'Implemented AES encryption for stored passwords, PBKDF2 hashing with unique salts, JDBC + PreparedStatements against injection, and master-password gated recovery.',
    tools: ['Java', 'Swing', 'JDBC', 'MySQL', 'AES', 'PBKDF2', 'SecureRandom'],
    architecture: 'Client-side Java Swing GUI → JDBC layer → MySQL. All secrets encrypted at rest. Master password verified via PBKDF2 before any decryption.',
    github: 'https://github.com/yadunandakumar/PasswordManager',
    highlights: [
      'AES encryption for password storage',
      'PBKDF2 with unique salts per entry',
      'SQL injection protection via PreparedStatements',
      'User verification before recovery',
      'Clean separation of crypto and UI logic',
    ],
  },
  {
    id: 'MISSION-002',
    codename: 'AUTHGUARD',
    title: 'Secure Web Authentication',
    status: 'ACTIVE',
    classification: 'INTERNAL',
    objective: 'Prototype a browser-extension style authentication tracker with last-login visibility and secure storage patterns.',
    threat: 'Session fixation, credential reuse awareness, weak local storage of auth state.',
    solution: 'Extension-oriented design focused on tracking login events and presenting last-login metadata while keeping sensitive data protected.',
    tools: ['CSS', 'JavaScript', 'Web Extension APIs'],
    architecture: 'Client-side storage with event listeners for login surfaces. Future hardening planned around encrypted local vaults.',
    github: 'https://github.com/yadunandakumar/Secure-web-Authentication',
    highlights: [
      'Login event tracking',
      'Last-login timestamp visibility',
      'Foundation for password vault extension',
    ],
  },
];

export const CERTS = [
  {
    id: 'CERT-001',
    title: 'Certified Cybersecurity Foundations Professional (CCFP)',
    issuer: 'Virtual Cyber Labs',
    date: 'Sep 2025',
    credentialId: '00a26edd-6f04-4c61-a065-89feb0d7d33f',
    description: 'Comprehensive understanding of foundational cybersecurity principles and industry standards.',
  },
  {
    id: 'CERT-002',
    title: 'Deloitte Australia – Cyber Job Simulation',
    issuer: 'Forage',
    date: 'Jul 2025',
    credentialId: 'p2aM3Qo6uSHTrgh5X',
    description: 'Practical simulation tasks mirroring real-world cyber security analysis and response scenarios.',
  },
  {
    id: 'CERT-003',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    date: 'Apr 2025',
    credentialId: '6c1cd1a3-bc76-408a-a46b-7e6eba31f36a',
    description: 'Fundamental knowledge of network security, threats, and defensive strategies.',
  },
];

export const TIMELINE = [
  { year: '2024', quarter: 'Q3', event: 'Enrolled at Marwadi University – B.Tech CSE (Cyber Security)', type: 'education' },
  { year: '2025', quarter: 'Q1', event: 'Cisco Introduction to Cybersecurity certification', type: 'cert' },
  { year: '2025', quarter: 'Q2', event: 'Deep dive into Networking, OS, and Secure Coding coursework', type: 'skill' },
  { year: '2025', quarter: 'Q3', event: 'Completed Deloitte Australia Cyber Job Simulation', type: 'cert' },
  { year: '2025', quarter: 'Q3', event: 'Earned CCFP – Certified Cybersecurity Foundations Professional', type: 'cert' },
  { year: '2025', quarter: 'Q4', event: 'Built Secure Password Manager (AES + PBKDF2 + JDBC)', type: 'project' },
  { year: '2025', quarter: 'Q4', event: 'Active CTF participation & TryHackMe rooms', type: 'ctf' },
  { year: '2026', quarter: 'NOW', event: 'Seeking cybersecurity / software development internships', type: 'goal' },
  { year: '2026+', quarter: 'FUTURE', event: 'SOC Analyst path • VAPT • Cloud Security • Advanced CTFs', type: 'goal' },
];

export const EASTER_EGGS = {
  konami: '↑↑↓↓←→←→BA',
  flag: 'BLACKBOX{y0u_f0und_th3_s3cr3t_fl4g_0f_th3_0s}',
  sudo: 'Access granted. Welcome to the inner circle, operator.',
};
