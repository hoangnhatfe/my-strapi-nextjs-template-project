import { Media } from "@/types/Media";
import { MetaSocial } from "./MetaSocial";

export interface Seo {
  metaTitle: string;
  metaDescription: string;
  metaImage: { data: Media };
  metaSocial: MetaSocial[];
  keywords?: string;
  metaRobots?: string;
  structuredData?: any;
  metaViewport?: string;
  canonicalURL?: string;
}
