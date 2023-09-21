import { Media } from "../Media";
import { Seo } from "../components/shared/Seo";

export interface GlobalSetting {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;
    title?: string;
    description?: string;
    seo: Seo;
  };
}