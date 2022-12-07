import { IContact } from "../interfaces/icontact";
import { ICv } from "../interfaces/icv";
import { IEducation } from "../interfaces/ieducation";
import { IProject } from "../interfaces/iproject";
import { IResume } from "../interfaces/iresume";
import { ISummary } from "../interfaces/isummary";
import { ITechnical } from "../interfaces/itechnical";

export class Resume implements IResume {
    technical: ITechnical;
    cv: ICv;
    education?: IEducation | undefined;
    summary: ISummary;
    contact: IContact;
    projects: IProject[];

    constructor(_resume: IResume) {
        this.technical = _resume.technical;
        this.cv = _resume.cv;
        this.education = _resume.education || undefined;
        this.summary = _resume.summary;
        this.contact = _resume.contact;
        this.projects = _resume.projects || [];
    }
}
