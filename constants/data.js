const userData = {
  name: "Sameer Malik",
  designation: "Cloud & AI Applications Engineer",
  email: "sameermalik20aug@gmail.com",
  location: "Sydney, Australia",
  // Production origin — used for canonical + Open Graph URLs. Update if you
  // move to a custom domain.
  siteUrl: "https://samy-portfolio.vercel.app",

  work: [
    {
      title: "Bastion",
      blurb:
        "A dependency vulnerability scanner: it parses a package.json or requirements.txt, checks every dependency against OSV.dev, and returns deterministic, reviewable fix suggestions, with an optional Claude-powered plain-English explanation of each finding.",
      tech: "Python, FastAPI, React, TypeScript, OSV.dev",
      link: { href: "https://bastion-scan.vercel.app", label: "bastion-scan.vercel.app" },
      visual: {
        type: "screenshot",
        src: "/work/bastion.svg",
        width: 1000,
        height: 520,
        alt: "Bastion dependency scan flagging axios and lodash as critical and high, with suggested version bumps and deterministic fixes.",
      },
    },
    {
      title: "Incident Management System",
      blurb:
        "An incident logging dashboard that tracks software issues and uses AI to categorise incident types automatically and surface trend reports, backed by a serverless AWS pipeline.",
      tech: "Python, React, AWS Lambda, SQS, AWS CDK",
      visual: {
        type: "diagram",
        light: "/work/incident-light.svg",
        dark: "/work/incident-dark.svg",
        width: 1320,
        height: 200,
        alt: "Architecture: a React dashboard feeds a Lambda ingest API and an SQS queue into an AI classifier that generates trend reports.",
      },
    },
    {
      title: "Data Insights Pipeline",
      blurb:
        "An ETL pipeline that extracts banking data from multiple sources, transforms it in Python, and loads it into AWS RDS, then applies OpenAI and RAG to unstructured feedback to extract structured insights.",
      tech: "Python, SQL, AWS RDS, CloudFormation, OpenAI API, RAG",
      visual: {
        type: "diagram",
        light: "/work/data-insights-light.svg",
        dark: "/work/data-insights-dark.svg",
        width: 1320,
        height: 200,
        alt: "Architecture: data sources flow through a Python ETL into AWS RDS, with a RAG and OpenAI stage producing structured insights.",
      },
    },
  ],

  experience: [
    {
      role: "Full Stack Developer",
      company: "University of New South Wales",
      companyLink: "https://www.unsw.edu.au/",
      dates: "Oct 2025 — Present",
      bullets: [
        "Led the technical design and full-stack migration of ECOS2, UNSW's enterprise course-outline system, from a legacy Laravel app to a Symfony and React architecture on AWS ECS, improving page-load speeds by 40%.",
        "Maintained the Portfolio Entry admissions platform, handling sensitive student PII with Datadog monitoring, and modernised its auth by migrating from OAuth 2.0 to the Microsoft Graph API for UNSW Business School.",
        "Built full-stack features for BAMS (Node.js, React, TypeScript) to automate contract-processing workflows and access controls, and maintained AWS CodePipeline CI/CD across all three platforms.",
      ],
    },
    {
      role: "Software Developer",
      company: "InSite Monitoring",
      companyLink: "https://insiteprojectsolutions.com/",
      dates: "Feb 2025 — Jun 2025",
      bullets: [
        "Designed and prototyped a document ingestion and management platform (FastAPI, React, PostgreSQL) with secure uploads, role-based access control, version history and structured retrieval, reducing retrieval time by 30%.",
        "Containerised the application with Docker and orchestrated CI/CD via AWS CodePipeline for consistent, reliable multi-environment deployments.",
        "Engineered a real-time SendGrid notification system alerting supervisors to critical document actions (35% less oversight delay), backed by comprehensive unit, integration and API tests.",
      ],
    },
    {
      role: "Research Assistant",
      company: "University of Sydney",
      companyLink: "https://www.sydney.edu.au/",
      dates: "Dec 2024 — Mar 2025",
      bullets: [
        "Developed automated scripts to streamline database workflows, integrating REST APIs for scalable, reliable data processing.",
        "Designed automated test-data generation for high-quality, repeatable performance testing aligned with Agile practices.",
        "Optimised database query performance by 25% through automated tuning, and documented the process for stakeholder clarity.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Tata Consultancy Services",
      companyLink: "https://www.tcs.com/",
      dates: "Oct 2020 — Jul 2023",
      bullets: [
        "Built and maintained a customer-facing retail onboarding portal (Node.js, Angular, MongoDB, AWS) spanning submission through Experian credit-bureau verification for 5M+ banking customers.",
        "Developed backend services and microservices with secure, OpenAPI-documented REST APIs, integrating AWS CloudWatch monitoring, Jenkins CI/CD and SonarQube quality gates.",
        "Led delivery of an automated credit-card generation platform (25% faster issuance) and mentored junior developers through monthly Agile production deployments.",
      ],
    },
  ],

  skills: [
    {
      category: "Languages & Frameworks",
      items: "Python, TypeScript, JavaScript, SQL, React, Angular, Django REST framework, Node.js",
    },
    {
      category: "Databases & Cloud",
      items: "PostgreSQL, MongoDB, AWS (S3, DynamoDB, Lambda, ECS, CloudWatch), Docker, GCP (Foundations)",
    },
    {
      category: "Developer Tools",
      items: "REST APIs, Git, GitHub, AWS CDK, CodePipeline, Jenkins, Jest, OAuth, JSON, YAML, Jira, Claude",
    },
    {
      category: "Key Competencies",
      items: "Microservice architecture, Infrastructure as Code, OWASP Top 10, Agile collaboration",
    },
  ],

  socialLinks: {
    github: "https://github.com/sameermalik20aug",
    linkedin: "https://www.linkedin.com/in/sameer-malik-20aug/",
    twitter: "https://x.com/SamyM98",
  },
};

export default userData;
