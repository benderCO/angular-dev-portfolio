import { ITechnical } from "../interfaces/itechnical";

export class Technical implements ITechnical{
    codeBase: string[];
    database: string[];
    tooling: string[];
    cloud: string[];
    os: string[];

    constructor(_technical: ITechnical) {
        this.codeBase = _technical.codeBase || [];
        this.database = _technical.database || [];
        this.tooling = _technical.tooling || [];
        this.cloud = _technical.cloud || [];
        this.os = _technical.os || [];
    }
}
