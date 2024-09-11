const resume = {
    "name": "Jane Smith",
    "contact": {
      "email": "haarissams02@gmail.com",
      "phone": "8610603114",
      "linkedin": "https://www.linkedin.com/in/mohamed-haaris-6604a4317",
      "github": "https://github.com/Haarissams"
    },
    "summary": "Dedicated and detail-oriented software engineer with over 5 years of experience in full-stack development. Expertise in building scalable applications and optimizing performance. Passionate about technology and eager to contribute to innovative projects.",
    "skills": [
      "JavaScript",
      "TypeScript",
      "react",
      "Node.js",
      "HTML"
    ],
    "experience": [
      {
        "job_title": "Lead Software Engineer",
        "company": "Innovative Tech Corp",
        "location": "Austin, TX",
        "dates": "March 2021 - Present",
        "responsibilities": [
          "Directed the development of a cloud-based application using react and Node.js.",
          "Designed and implemented microservices architecture with Docker.",
          "Collaborated with product managers to define and prioritize features."
        ]
      },
      {
        "job_title": "Software Developer",
        "company": "Creative Solutions LLC",
        "location": "Seattle, WA",
        "dates": "August 2017 - February 2021",
        "responsibilities": [
          "Developed web applications with a focus on front-end performance.",
          "Integrated APIs and optimized backend processes.",
          "Worked with cross-functional teams to deliver high-quality software."
        ]
      }
    ],
    "education": [
      {
        "degree": "Master of Science in Software Engineering",
        "institution": "Stanford University",
        "graduation_year": 2017
      },
      {
        "degree": "Bachelor of Science in Computer Science",
        "institution": "University of Washington",
        "graduation_year": 2015
      }
    ],
    "certifications": [
      {
        "title": "AWS Certified Solutions Architect",
        "issuer": "Amazon Web Services",
        "year": 2022
      },
      {
        "title": "Certified Scrum Master",
        "issuer": "Scrum Alliance",
        "year": 2019
      }
    ],
    "projects": [
      {
        "title": "E-commerce Platform",
        "description": "Developed a full-featured e-commerce platform using Angular and Node.js, including payment integration and user management.",
        "link": "https://github.com/Haarissams"
      },
      {
        "title": "Real-time Chat Application",
        "description": "Built a real-time chat application with WebSocket and Docker, featuring user authentication and message history.",
        "link": "https://github.com/Haarissams"
      }
    ],
    "languages": [
      "English (Native)",
      "French (Conversational)"
    ]
  };
  
  // Log resume details
  console.log(`Name: ${resume.name}`);
  console.log(`Contact:`);
  for (const [key, value] of Object.entries(resume.contact)) {
    console.log(`  ${key}: ${value}`);
  }
  
  console.log(`Summary: ${resume.summary}`);
  
  console.log(`Skills:`);
  for (const skill of resume.skills) {
    console.log(`  - ${skill}`);
  }
  
  console.log(`Experience:`);
  for (const job of resume.experience) {
    console.log(`  Job Title: ${job.job_title}`);
    console.log(`  Company: ${job.company}`);
    console.log(`  Location: ${job.location}`);
    console.log(`  Dates: ${job.dates}`);
    console.log(`  Responsibilities:`);
    for (const responsibility of job.responsibilities) {
      console.log(`    - ${responsibility}`);
    }
  }
  
  console.log(`Education:`);
  for (const edu of resume.education) {
    console.log(`  Degree: ${edu.degree}`);
    console.log(`  Institution: ${edu.institution}`);
    console.log(`  Graduation Year: ${edu.graduation_year}`);
  }
  
  console.log(`Certifications:`);
  for (const cert of resume.certifications) {
    console.log(`  Title: ${cert.title}`);
    console.log(`  Issuer: ${cert.issuer}`);
    console.log(`  Year: ${cert.year}`);
  }
  
  console.log(`Projects:`);
  for (const project of resume.projects) {
    console.log(`  Title: ${project.title}`);
    console.log(`  Description: ${project.description}`);
    console.log(`  Link: ${project.link}`);
  }
  
  console.log(`Languages:`);
  for (const language of resume.languages) {
    console.log(`  - ${language}`);
  }
  