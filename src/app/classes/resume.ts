import { IResume } from "../interfaces/iresume";
import { Contact } from "./contact";
import { Cv } from "./cv";
import { Education } from "./education";
import { Project } from "./project";
import { Summary } from "./summary";
import { Technical } from "./technical";

export class Resume implements IResume {
    technical: Technical;
    cv: Cv;
    education?: Education | undefined;
    summary: Summary;
    contact: Contact;
    projects: Project[];

    constructor(_resume: IResume) {
        this.technical = _resume.technical;
        this.cv = _resume.cv;
        this.education = _resume.education || undefined;
        this.summary = _resume.summary;
        this.contact = _resume.contact;
        this.projects = _resume.projects || [];
    }
}
