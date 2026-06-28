import { resumeSchema, type Resume } from './schema';

/**
 * ✏️  EDIT THIS FILE: it is your resume.
 * The object below is validated against the schema at build time.
 */
const data: Resume = {
  name: 'Collin Aldaibis',
  title: 'AI Engineer',
  summary:
    'AI engineer with an MSc in Computing Science. I build production AI systems end to end, from training and fine-tuning language models to the web apps and infrastructure that ship them, and enjoy working directly with stakeholders to turn business goals into working software.',
  location: 'Utrecht, Netherlands',
  email: 'caldaibis@gmail.com',
  links: [
    { label: 'GitHub', url: 'https://github.com/caldaibis' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/caldaibis' },
  ],
  skills: [
    {
      group: 'Languages',
      items: ['Python', 'TypeScript', 'C#', 'C/C++', 'PHP', 'R', 'Haskell'],
    },
    {
      group: 'ML & Data Science',
      items: [
        'PyTorch',
        'PyTorch Lightning',
        'NLP & GenAI',
        'LLMs & RAG',
        'Vector databases',
        'Deep RL (PPO, A2C, TD3)',
        'Classical ML',
      ],
    },
    {
      group: 'Web & Backend',
      items: ['React', 'Angular', 'FastAPI', 'Flask', 'Laravel', 'Symfony', 'Vue.js'],
    },
    {
      group: 'Cloud & DevOps',
      items: ['Azure', 'GCP', 'Docker', 'Terraform', 'Bazel', 'CI/CD', 'MLOps', 'Linux'],
    },
    {
      group: 'Data',
      items: ['PostgreSQL', 'MySQL'],
    },
  ],
  experience: [
    {
      company: 'Netherlands Forensic Institute (NFI)',
      role: 'Machine Learning Engineer',
      location: 'The Hague, Netherlands',
      start: 'Oct 2024',
      end: 'Present',
      summary:
        'Building forensic AI within a 40+ person data science guild, leading the engineering and LLM work across Scrum projects with the police, the Hansken team, and the biological and chemical data labs.',
      highlights: [
        'Fine-tuned Whisper for Dutch forensic audio (ethnolects, dialects, and low-quality recordings), cutting word error rate from ~40% to ~15% on private forensic datasets and teaching it previously unseen slang.',
        'Pre-trained a Dutch ModernBERT from scratch on Dutch FineWeb / FineWeb-Edu to close a gap in open-source Dutch encoder models with a modern BERT/RoBERTa successor.',
        'Built and evaluated the Hansken Copilot RAG application, helping investigators search cases of millions of digital traces, fully on-prem with local embedding models and LLMs (case data may never leave the NFI), evaluated with RAGAS on hand-curated forensic datasets.',
        'Benchmarked Dutch LLMs (GPT-NL, Mistral, Gemma, Qwen) with SURF & TNO; contributed the first Dutch bias benchmark to EuroEval and built a fine-tuning/eval pipeline for a forensic text-classification use case to assess whether GPT-NL could outperform existing models.',
        'Established local LLM infrastructure for running and fine-tuning models on sensitive data (llama.cpp, Unsloth, Hugging Face, PyTorch), including sandboxed local coding agents and optimised training runs on NVIDIA H200s.',
        'Founded and chaired the Python Dev Club and LLM Club to raise engineering and LLM literacy across the guild (modern tooling like Ruff and uv/pdm, plus safe local agents), and advised NFI leadership on rolling out LLM technology organisation-wide.',
      ],
      tech: [
        'Python',
        'PyTorch',
        'Hugging Face',
        'Unsloth',
        'llama.cpp',
        'RAG',
        'RAGAS',
        'NVIDIA H200',
      ],
    },
    {
      company: 'Cordys Analytics',
      role: 'Full-Stack Software Engineer',
      location: 'Utrecht, Netherlands',
      start: '2023',
      end: '2024',
      summary:
        "Built the company's core AI product, giving clinicians and patients seamless access to AI-powered ECG diagnostics.",
      highlights: [
        'Developed the diagnostics platform end to end, from model serving to clinician-facing UI.',
        'Supervised several international AI master’s students on deep learning for ECG research theses.',
        'Organised company events and team activities.',
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
      company: 'Schiphol (via Incentro)',
      role: 'Software & Machine Learning Engineer',
      location: 'Amsterdam, Netherlands',
      start: '2022',
      end: '2023',
      summary:
        'Delivered ML and full-stack applications for Schiphol as a consultant, owning the relationship with the customer.',
      highlights: [
        'Built and maintained a Flask ML service, a Laravel backend, and an Angular frontend.',
        'Worked directly with stakeholders at Schiphol to translate business objectives into delivered software.',
        'Applied NLP techniques, word embeddings, and LLMs to production use cases.',
      ],
      tech: [
        'Python',
        'Flask',
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
      highlights: [
        'Built full-stack web applications alongside university studies.',
        'Engaged directly with clients to understand and deliver on business objectives.',
      ],
      tech: ['Symfony (PHP)', 'Vue.js', 'Nginx', 'Docker', 'Linux', 'Git'],
    },
  ],
  projects: [
    {
      name: 'Aparecium: Agentic LLM Benchmark Extraction',
      description:
        'A multi-stage agentic pipeline that extracts AI model benchmark scores from official model pages, model cards, and benchmark charts: web search, content/table parsing, OCR on chart images, LLM-based extraction, and resolution against a canonical benchmark catalog, evaluated against ground truth. Includes a self-improving agent that diagnoses recurring failure modes, applies targeted fixes, and re-validates, plus a frontend for exploring and comparing results.',
      url: 'https://github.com/caldaibis/project-aparecium',
      tech: ['Python', 'LLM agents', 'OCR', 'TypeScript', 'uv'],
    },
    {
      name: 'Speechless: Whisper Vocabulary Adaptation',
      description:
        'Research pipeline adapting Whisper to out-of-vocabulary terms (e.g. Dutch medical vocabulary) without training on real audio: a single-codebook residual VQ over frozen Whisper encoder states and a GPT-2-style decoder mapping text to RVQ token sequences. Reproduces and extends the Speechless (2025) methodology.',
      url: 'https://github.com/caldaibis/speechless',
      tech: ['Python', 'PyTorch', 'Whisper', 'Residual VQ', 'ASR'],
    },
    {
      name: 'Autonomous Browser Agent',
      description:
        'End-to-end agentic automation: triggered by incoming email, it opens a target listing, extracts metadata, and hands off to a browser agent that navigates third-party sites, writes a tailored message from a template, fills the application form, uploads documents, and submits, fully autonomously.',
      url: 'https://github.com/caldaibis/browser-agent',
      tech: ['Python', 'LLM agents', 'Browser automation'],
    },
    {
      name: 'Multi-Agent RL for Probability Updating Games',
      description:
        'Research codebase behind my MSc thesis: implements general-sum probability updating games as OpenAI Gym environments and applies PPO and other policy-gradient methods (Ray RLlib + Ray Tune) to empirically converge to Nash equilibria.',
      url: 'https://github.com/caldaibis/probability-updating-games-marl',
      tech: ['Python', 'Ray RLlib', 'Ray Tune', 'OpenAI Gym', 'PPO'],
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
      details:
        'Coursework: algorithmics, optimisation, concurrency, security, graphics, computational intelligence, functional programming.',
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
