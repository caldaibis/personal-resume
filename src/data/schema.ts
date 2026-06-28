import { z } from 'zod';

/**
 * The single source of truth for the *shape* of a resume.
 * Content lives in `resume.ts` and is validated against this schema
 * at build time, so a typo or missing field fails the build — not the page.
 */

export const linkSchema = z.object({
  label: z.string(),
  url: z.string().url(),
});

export const experienceSchema = z.object({
  company: z.string(),
  role: z.string(),
  location: z.string().optional(),
  start: z.string(), // e.g. "2022-01" or "Jan 2022"
  end: z.string(), // e.g. "Present"
  summary: z.string().optional(),
  highlights: z.array(z.string()).default([]),
  tech: z.array(z.string()).default([]),
});

export const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  url: z.string().url().optional(),
  tech: z.array(z.string()).default([]),
});

export const certificationSchema = z.object({
  name: z.string(),
  issuer: z.string(),
  year: z.string(),
  url: z.string().url().optional(),
});

export const educationSchema = z.object({
  institution: z.string(),
  degree: z.string(),
  start: z.string().optional(),
  end: z.string(),
  details: z.string().optional(),
});

export const resumeSchema = z.object({
  name: z.string(),
  title: z.string(),
  summary: z.string(),
  location: z.string().optional(),
  email: z.string().email(),
  links: z.array(linkSchema).default([]),
  skills: z.array(z.object({ group: z.string(), items: z.array(z.string()) })).default([]),
  experience: z.array(experienceSchema).default([]),
  projects: z.array(projectSchema).default([]),
  education: z.array(educationSchema).default([]),
  certifications: z.array(certificationSchema).default([]),
});

export type Resume = z.infer<typeof resumeSchema>;
