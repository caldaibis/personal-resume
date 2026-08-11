import { resumeSchema, type Resume } from './schema';

/**
 * ✏️  EDIT THIS FILE: it is your resume.
 * The object below is validated against the schema at build time.
 */
const data: Resume = {
  name: 'Collin Aldaibis',
  title: 'Freelance AI & Software Engineer',
  summary:
    'Freelance AI and software engineer with an MSc in Computing Science and 5+ years of experience taking user-facing systems from research and model development through deployment and production support. I combine hands-on ML and LLM work with full-stack engineering, cloud infrastructure, and close collaboration with stakeholders and domain experts.',
  location: 'Utrecht, Netherlands',
  email: 'caldaibis@gmail.com',
  links: [
    { label: 'GitHub', url: 'https://github.com/caldaibis' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/caldaibis' },
  ],
  experience: [
    {
      company: 'Netherlands Forensic Institute (NFI)',
      role: 'Machine Learning Engineer',
      location: 'The Hague, Netherlands',
      start: '2024',
      end: 'Aug 2026',
      summary:
        'Led the engineering and LLM work across forensic AI R&D projects with the police, the Hansken team, and the biological and chemical data labs.',
      highlights: [
        'Fine-tuned Whisper for Dutch forensic audio (ethnolects, dialects, and low-quality recordings), cutting word error rate from ~40% to ~15% on private datasets; initiated and supervised a master’s thesis on adapting its vocabulary using text-only data.',
        'Pre-trained a Dutch ModernBERT from scratch on Dutch FineWeb / FineWeb-Edu to close a gap in open-source Dutch encoder models with a modern BERT/RoBERTa successor.',
        'Built and evaluated the Hansken Copilot RAG application, helping investigators search cases of millions of digital traces, fully on-prem with local embedding models and LLMs, evaluated with RAGAS on hand-curated forensic datasets.',
        'Benchmarked LLMs with SURF & TNO, contributed the first Dutch bias benchmark to EuroEval, and built a reproducible fine-tuning and evaluation pipeline for forensic text classification.',
        'Established local LLM infrastructure for running and fine-tuning models on sensitive data (llama.cpp, Unsloth, Hugging Face, PyTorch), including sandboxed local coding agents and optimised training runs on NVIDIA H200s.',
        'Founded and chaired the Python Dev Club and LLM Club to raise engineering and LLM literacy across the guild (modern tooling like Ruff and uv, plus safe local agents), and advised NFI leadership on rolling out LLM technology organisation-wide.',
      ],
      tech: [
        'Python',
        'PyTorch',
        'HF datasets, TRL, transformers',
        'Unsloth',
        'llama.cpp',
        'Streamlit',
      ],
    },
    {
      company: 'Cordys Analytics',
      role: 'Full-Stack Software Engineer',
      location: 'Utrecht, Netherlands',
      start: '2023',
      end: '2024',
      summary:
        "Developed the company's core AI diagnostics platform, connecting ECG models to clinician- and patient-facing workflows.",
      highlights: [
        'Built the platform end to end, from Python/PyTorch model serving and C# services to the React interface and Azure infrastructure managed with Docker and Terraform.',
        'Supervised several international AI master’s students on deep learning for ECG research theses.',
      ],
      tech: [
        'C#',
        'Python',
        'PyTorch Lightning',
        'React (TypeScript)',
        'Docker',
        'Bazel',
        'Terraform',
        'Azure',
        'MLOps',
      ],
    },
    {
      company: 'Schiphol / Cargonaut (via Incentro)',
      role: 'Software & Machine Learning Engineer',
      location: 'Amsterdam, Netherlands',
      start: '2022',
      end: '2023',
      summary:
        'Recovered and operated Cargonaut’s Automatic Nomination matching system, assigning inbound shipments to the correct freight forwarder from noisy Air Waybill and station-declaration addresses for 50+ users.',
      highlights: [
        'Owned the live system across a Flask ML service, Laravel/MySQL backend, and Angular frontend; diagnosed severe quality defects while keeping the operational workflow running.',
        'Improved matching across misspellings, inconsistent writing, and outdated addresses by evaluating approaches ranging from Levenshtein and vocabulary-based fuzzy matching to FastText semantic models and LLM-assisted matching.',
        'Built a live active-learning loop in which corrections from users became training feedback, incrementally improving predictions on real freight data.',
        'Released improvements weekly through test, staging, acceptance, and production; owned critical incident response and out-of-hours recovery during severe failures.',
        'Stabilised a pivotal application that remains in use, restored customer confidence, and received Incentro’s “Brandblusser van het Jaar” award for turning around the live system and strengthening the Schiphol relationship.',
      ],
      tech: [
        'Python',
        'Flask',
        'FastText',
        'Active learning',
        'Laravel (PHP)',
        'Angular (TypeScript)',
        'GCP',
        'Docker',
        'MySQL',
        'CI/CD',
      ],
    },
    {
      company: 'Yard (Digital Agency)',
      role: 'Full-Stack Software Engineer (0.4 FTE)',
      location: 'Utrecht, Netherlands',
      start: '2018',
      end: '2020',
      summary: 'Built and maintained production web applications for agency clients alongside university studies.',
      highlights: [
        'Owned customer-reported bugs end to end: proactively clarified requirements with clients, diagnosed the issue, implemented and tested the fix, and delivered it to production.',
        'Developed features and fixes across Symfony backends, Vue frontends, and Nginx/Docker/Linux deployments.',
      ],
      tech: ['Symfony (PHP)', 'Vue.js', 'Nginx', 'Docker', 'Linux', 'Git'],
    },
  ],
  skills: [
    {
      group: 'Languages',
      items: ['Python', 'SQL', 'TypeScript', 'C#', 'PHP'],
    },
    {
      group: 'AI & Data',
      items: ['PyTorch', 'Hugging Face', 'LLMs & RAG', 'NLP', 'Model evaluation', 'Active learning'],
    },
    {
      group: 'Software & Cloud',
      items: ['React', 'Angular', 'Flask', 'Docker', 'Terraform', 'CI/CD', 'GCP', 'Azure', 'Linux'],
    },
  ],
  projects: [
    {
      name: 'Operated Rental-Application Browser Agent',
      description:
        'Built and operate an email-triggered browser agent used by a small group of real users to submit rental applications on third-party sites. It extracts listing data, writes tailored messages, uploads documents, and completes the browser flow end to end.',
      url: 'https://github.com/caldaibis/browser-agent',
      tech: ['Python', 'LangChain Deep Agents', 'Playwright'],
    },
    {
      name: 'Aparecium: Agentic LLM Benchmark Extraction',
      description:
        'Built an evaluated multi-stage agentic pipeline that extracts benchmark scores from official pages, tables, and chart images using web search, parsing, OCR, and LLM extraction. Includes canonical resolution, automated failure diagnosis, re-validation, and an exploration frontend.',
      url: 'https://github.com/caldaibis/project-aparecium',
      tech: ['Python', 'LLM agents', 'OCR', 'TypeScript', 'uv'],
    },
    {
      name: 'Speechless: Whisper Vocabulary Adaptation',
      description:
        'Research implementation for adapting Whisper to unseen vocabulary without paired audio, using residual VQ over frozen encoder states and a GPT-2-style decoder. Reproduces and extends the Speechless (2025) method for Dutch medical terms.',
      url: 'https://github.com/caldaibis/speechless',
      tech: ['Python', 'PyTorch', 'Whisper', 'ASR'],
    },
  ],
  education: [
    {
      institution: 'Utrecht University',
      degree: 'MSc, Computing Science',
      start: '2018',
      end: '2022',
      details:
        'Master’s thesis “Investigating relaxed probability updating games” (grade 8.2). Coursework: advanced machine learning, data mining, pattern recognition, evolutionary computing, multi-agent learning, network science.',
    },
    {
      institution: 'Utrecht University',
      degree: 'BSc, Computing Science',
      start: '2015',
      end: '2018',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Machine Learning (Specialty)',
      issuer: 'Amazon Web Services',
      year: '2023',
    },
    {
      name: 'Associate Cloud Engineer',
      issuer: 'Google Cloud',
      year: '2023',
    },
    {
      name: 'Deep Learning Specialisation',
      issuer: 'DeepLearning.AI (Coursera)',
      year: '2022',
    },
  ],
};

// Throws at build time if the data does not match the schema.
export const resume: Resume = resumeSchema.parse(data);
