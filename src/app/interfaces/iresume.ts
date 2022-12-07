import { IContact } from "./icontact"
import { ICv } from "./icv"
import { IEducation } from "./ieducation"
import { IProject } from "./iproject"
import { ISummary } from "./isummary"
import { ITechnical } from "./itechnical"

export interface IResume {
    technical: TIechnical
    cv: ICv
    education?: IEducation
    summary: ISummary
    contact: IContact
    projects: IProject[]
}
