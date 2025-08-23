import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
    image: z.string(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    url: z.string().url(),
  }),
});

export const collections = {
  posts,
  projects,
};

export class SiteConfig {
  static postsPerPage = 10;
  static githubUrl = "https://github.com/jcarloscandela";
  static xUrl = "https://x.com/jcarloscandela";
  static linkedinUrl = "https://www.linkedin.com/in/jcarloscandela/";
  static instagramUrl = "";
  static siteTitle = "Astro - Shadcn UI Portfolio Template";
  static siteDescription = "A modern Astro template with Shadcn UI components.";
  static defaultLanguage = "en";
  static theme = "light";
}
