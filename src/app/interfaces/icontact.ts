import { ISocialMedia } from "./isocial-media";

export interface IContact {
    name: string,
    phone: string,
    email: string,
    address?: string,
    socialMedia: ISocialMedia[]
}
