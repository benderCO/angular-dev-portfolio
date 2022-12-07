import { SocialMedia } from "./social-media";

export interface Contact {
    name: string,
    phone: string,
    email: string,
    address?: string,
    socialMedia: SocialMedia[]
}
