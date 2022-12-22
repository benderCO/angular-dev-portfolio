import { ICompany } from 'src/app/interfaces/icompany';
import { ICv } from "../interfaces/icv";

export class Cv implements ICv {
    company: ICompany[] = [];

    constructor(_cv?: ICv) {
        this.company = _cv?.company || [];
    }
}
