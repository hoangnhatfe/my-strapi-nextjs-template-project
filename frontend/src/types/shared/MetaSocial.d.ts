import { Media } from "@/types/Media";

export enum SocialNetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter',}

export interface MetaSocial {
  socialNetwork: SocialNetwork;
  title: string;
  description: string;
  image?: { data: Media };
}
