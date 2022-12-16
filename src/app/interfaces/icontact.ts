import { ISocialMedia } from "./isocial-media";

export interface IContact {
  address?: string,
  email: string,
  name: string,
  phone: string,
    socialMedia: ISocialMedia[]
}
