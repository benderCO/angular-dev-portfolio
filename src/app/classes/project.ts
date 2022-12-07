import { IProject } from "../interfaces/iproject";

export class Project implements IProject{
    img?: any;
    name: string;
    url: string;

    constructor(_project?: IProject) {
        this.img = _project?.img || '';
        this.name = _project?.name || '';
        this.url = _project?.url || '';
    }
}
