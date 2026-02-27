export const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Interests', href: '#hobbies', id: 'hobbies' },
  { name: 'Contact', href: '#contact', id: 'contact' },
]

export const education = [
  {
    period: '2021 - 2025',
    degree: 'Bsc(Hons) in Computer Science',
    school: 'NSBM Green University, Sri Lanka',
    gpa: '3.69/4.0',
    highlights: [
      'Conducted research on image processing for apparel-related problem solving using deep learning',
      'Graduated with Second Class Upper Division',
      'Gained deep knowledge of core computer science concepts and practical applications',
    ],
  },
  {
    period: '2022 - Present',
    degree: 'Bachelor of Information Technology (BIT)',
    school: 'University of Colombo School of Computing (UCSC), Sri Lanka',
    gpa: '',
    highlights: [
      'Strong foundation in programming, data structures, and software development principles',
      'Hands-on experience with problem solving, system analysis, and academic projects',
      'Currently expanding knowledge in modern technologies and industry best practices',
    ],
  },
  {
    period: '2012 - 2020',
    degree: 'Physical Science Stream (A/L)',
    school: 'Badulla Central College, Sri Lanka',
    gpa: '',
    highlights: [
      'Combined Maths - C',
      'Physics - S',
      'Chemistry - S',
    ],
  },
]

export const experience = [
  {
    period: '2025 - Present',
    type: 'Work',
    typeVariant: 'dark',
    title: 'Full Stack Developer (Mobile & Web)',
    company: 'Portal (PVT) LTD',
    bullets: [
      'Developed and maintained full-stack applications using Flutter (mobile & web) and NestJS',
      'Integrated REST APIs and managed end-to-end data flow between frontend and backend systems',
      'Implemented MVC-based architecture to ensure clean separation of concerns and scalable codebases',
      'Built highly structured and maintainable projects using Flutter Hooks and modular folder structures',
      'Implemented state management, API error handling, and response mapping for reliable application behavior',
      'Performed log analysis, debugging, and performance optimization across frontend and backend layers',
      'Collaborated closely with backend and QA teams to ensure API contracts and system stability',
    ],
    tags: ['Flutter', 'Dart', 'Flutter Hooks', 'REST APIs', 'MVC Architecture', 'Next.js'],
  },
  {
    period: '2025',
    type: 'Work',
    typeVariant: 'dark',
    title: 'Mobile Application Developer',
    company: 'Esupport',
    bullets: [
      'Developed and maintained cross-platform mobile applications using Flutter',
      'Designed user-friendly interfaces based on UI/UX requirements',
      'Conducted error investigation, log tracing, and root-cause analysis',
      'Collaborated with backend developers to analyze API responses and data flow',
      'Completed real-time and location-based mobile application projects',
    ],
    tags: ['Flutter', 'Dart', 'Node.js', 'Laravel', 'PHP'],
  },
  {
    period: '2024 - 2025',
    type: 'Work',
    typeVariant: 'dark',
    title: 'Mobile Application Developer',
    company: 'PxL Tech (UK)',
    bullets: [
      'Developed and maintained mobile applications using Flutter and Dart',
      'Participated in requirement analysis and contributed to technical solution design',
      'Managed GitHub CI/CD pipelines for automated builds, testing, and deployments',
      'Analyzed performance metrics, system logs, and error patterns to improve app stability',
      'Handled Play Store and App Store deployment processes including app signing and version management',
    ],
    tags: ['Flutter', 'Dart', 'CI/CD', 'GitHub Actions', 'Node.js'],
  },
  {
    period: '2023 - 2024',
    type: 'Internship',
    typeVariant: 'purple',
    title: 'DevOps Intern',
    company: 'ABI Systems',
    bullets: [
      'Managed Docker containers and created Dockerfiles for deployment processes',
      'Configured Jenkins pipelines for automated build, test, and deployment workflows',
      'Worked with GitLab and GitHub for version control and repository management',
      'Used Bonita BPM for workflow automation and process improvements',
      'Performed database operations using MySQL and SQLite',
      'Troubleshot systems by reviewing logs, builds, and deployment outputs',
    ],
    tags: ['Docker', 'Jenkins', 'GitHub', 'GitLab', 'MySQL', 'SQLite'],
  },
  {
    period: 'Ongoing',
    type: 'Extra-Curricular',
    typeVariant: 'blue',
    title: 'Extra-Curricular Activities',
    company: 'University & Professional Communities',
    bullets: [
      'Temporary member of AIESEC — contributed to Japan–Sri Lanka cultural exchange projects and built connections with international participants',
      'Member of STEMUP organization',
      'Active member of the Chess Club at NSBM Green University',
      'Member of IEEE (Institute of Electrical and Electronics Engineers)',
      'Member of NSBM Free and Open Source Software (FOSS) Community',
    ],
    tags: ['AIESEC', 'STEMUP', 'Chess', 'IEEE', 'FOSS'],
  },
]

export const projects = [
  {
    title: 'Portal Mobile Application',
    desc: 'Private company mobile application developed using Flutter with NestJS backend. Implemented secure API integration, database management, and scalable application architecture.',
    tags: ['#FLUTTER', '#NESTJS', '#REST API', '#DATABASE'],
    img: new URL('../assets/images/project1.png', import.meta.url).href,
  },
  {
    title: 'MyUnivrs – UK Collaborative Project',
    desc: 'International collaborative project developed with a UK-based team. Built using Flutter and Node.js with API and database integration for real-world use cases.',
    tags: ['#FLUTTER', '#NODE.JS', '#API INTEGRATION', '#DATABASE'],
    img: new URL('../assets/images/project2.png', import.meta.url).href,
  },
  {
    title: 'Taxi Application',
    desc: 'Private company taxi booking application with real-time features. Developed using Flutter and Node.js with backend database integration.',
    tags: ['#FLUTTER', '#DART', '#NODE.JS', '#DATABASE'],
    img: new URL('../assets/images/project3.png', import.meta.url).href,
  },
  {
    title: 'WhatsApp-Style Chat Application',
    desc: 'Real-time chat application inspired by WhatsApp. Implemented messaging features using Flutter with PHP backend, SQL and NoSQL databases.',
    tags: ['#FLUTTER', '#DART', '#PHP', '#SQL', '#NOSQL'],
    img: new URL('../assets/images/project4.png', import.meta.url).href,
  },
  {
    title: 'UI/UX Design & Implementation Project',
    desc: 'Single project focused on complete UI/UX design using Figma and translating designs into a responsive Flutter application.',
    tags: ['#FIGMA', '#UI/UX', '#FLUTTER'],
    img: new URL('../assets/images/project5.png', import.meta.url).href,
  },
  {
    title: 'Final Year Research Project (Grade A)',
    desc: 'Research project focused on image processing and model training to address error detection in the apparel industry. Successfully implemented solutions using Python and Flutter.',
    tags: ['#PYTHON', '#FLUTTER', '#IMAGE PROCESSING', '#MODEL TRAINING'],
    img: new URL('../assets/images/project6.png', import.meta.url).href,
  },
  {
    title: 'Rock–Paper–Scissors (Image Processing)',
    desc: 'Single project using image processing techniques to recognize hand gestures. Built using Python libraries and computer vision concepts.',
    tags: ['#PYTHON', '#IMAGE PROCESSING', '#COMPUTER VISION'],
    img: new URL('../assets/images/project7.png', import.meta.url).href,
  },
  {
    title: 'Flutter Game Project',
    desc: 'A fun single-project Flutter game developed to explore animations, state management, and interactive UI components.',
    tags: ['#FLUTTER', '#GAME DEVELOPMENT'],
    img: new URL('../assets/images/project8.png', import.meta.url).href,
  },
  {
    title: 'Social Media Application (CRUD)',
    desc: 'Single project social media application implementing full CRUD operations with NoSQL database integration for learning and practice purposes.',
    tags: ['#FLUTTER', '#CRUD', '#NOSQL'],
    img: new URL('../assets/images/project11.png', import.meta.url).href,
  },
  {
    title: 'University Management System',
    desc: 'Group university project to manage academic processes including transport management, lecture scheduling, and student–lecturer communication using Flutter, Node.js, and MySQL.',
    tags: ['#FLUTTER', '#NODE.JS', '#MYSQL', '#GROUP PROJECT'],
    img: new URL('../assets/images/project10.png', import.meta.url).href,
  },
  {
    title: 'Internship Inventory Management System',
    desc: 'Company internship project for store quantity and inventory management. Created Docker images, managed MySQL database, and developed a supporting mobile application.',
    tags: ['#DOCKER', '#MYSQL', '#FLUTTER', '#INVENTORY SYSTEM'],
    img: new URL('../assets/images/project12.png', import.meta.url).href,
  },
  {
    title: 'Portal Flow – Employee Management System',
    desc: 'Private company project for employee management including login, task management, employee working days and time counting, and employee detail handling using Flutter, NestJS, and database management.',
    tags: ['#FLUTTER', '#NESTJS', '#EMPLOYEE MANAGEMENT', '#DATABASE'],
    img: new URL('../assets/images/project13.png', import.meta.url).href,
  },
  {
  title: 'Simple Inventory Management System',
  desc: 'An individual Flutter project built to practice CRUD operations for managing goods inventory in small shops, using Firebase for real-time data storage and synchronization.',
  tags: ['#FLUTTER', '#FIREBASE', '#CRUD'],
  img: new URL('../assets/images/project9.png', import.meta.url).href,
},
]
export const skills = {
  LANGUAGES: [
    'Dart',
    'JavaScript',
    'TypeScript',
    'PHP',
    'Python',
  ],
  FRAMEWORKS: [
    'Flutter',
    'Next.js',
    'Node.js',
    'Laravel',
    'React',
  ],
  MOBILE: [
    'Android Development',
    'iOS Development',
    'Flutter Mobile',
    'Flutter Web',
  ],
  DEVOPS: [
    'Docker',
    'Jenkins',
    'GitHub Actions',
    'GitLab CI',
    'CI/CD',
  ],
  DATABASES: [
    'MySQL',
    'SQLite',
    'NoSQL',
  ],
  TOOLS: [
    'Git',
    'Postman',
    'APIDog',
    'Figma',
    'VS Code',
    'Android Studio',
    'Notion',
  ],
}

export const hobbies = [
  {
    emoji: '✈️',
    title: 'Travel',
    desc: 'Exploring new cultures, places, and people. Every journey brings a new perspective and a fresh sense of wonder.',
  },
  {
    emoji: '📷',
    title: 'Photography',
    desc: 'Focusing on urban street photography and long-exposure landscapes. Capturing the soul of cities.',
  },
  {
    emoji: '📚',
    title: 'Reading',
    desc: 'Avid reader of non-fiction, primarily focusing on systems thinking, history, and modern philosophy.',
  },
  {
    emoji: '♟️',
    title: 'Chess',
    desc: 'Active member of the Chess Club at NSBM. Love the combination of strategic foresight and tactical precision.',
    dark: true,
  },
]