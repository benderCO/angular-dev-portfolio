import { IEducation } from "../interfaces/ieducation";

export class Education implements IEducation {
    university: string;
    startYear: number;
    endYear: number;
    gpa?: number | undefined;
    degree: string;
    major: string;
    minor?: string | undefined;
    activities: string[];
    associations: string[];

    constructor(_education?: IEducation) {
        this.university = _education?.university || '';
        this.startYear = _education?.startYear || new Date().getFullYear();
        this.endYear = _education?.endYear || new Date().getFullYear();
        this.gpa = _education?.gpa || 0;
        this.degree = _education?.degree || ''
        this.major = _education?.major || '';
        this.minor = _education?.minor || '';
        this.activities = _education?.activities || [];
        this.associations = _education?.associations || [];
    }
}
