import { IContact } from "../interfaces/icontact";
import { ISocialMedia } from "../interfaces/isocial-media";

export class Contact implements IContact {
    name: string;
    phone: string;
    email: string;
    address?: string | undefined;
    socialMedia: ISocialMedia[];

    constructor(_contact?: IContact) {
        this.name = _contact?.name || '';
        this.phone = _contact?.phone || '';
        this.email = _contact?.email || '';
        this.address = _contact?.address || undefined;
        this.socialMedia = _contact?.socialMedia || [];
    }
}
