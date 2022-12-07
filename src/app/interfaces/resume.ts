import { Contact } from "./contact"
import { Cv } from "./cv"
import { Education } from "./education"
import { Project } from "./project"
import { Summary } from "./summary"
import { Technical } from "./technical"

export interface Resume {
    technical: Technical
    cv: Cv
    education?: Education
    summary: Summary
    contact: Contact
    projects: Project[]
}
