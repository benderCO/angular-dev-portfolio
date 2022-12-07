import { ISocialMedia } from "../interfaces/isocial-media";

export class SocialMedia implements ISocialMedia {
    url: string;
    img?: any;
    name: string;

    constructor(_socialMedia: ISocialMedia) {
        this.img = _socialMedia.img;
        this.name = _socialMedia.name;
        this.url = _socialMedia.url;
    }
}
