import { IPosition } from "../interfaces/iposition";

export class Position implements IPosition{
    title: string;
    team?: string | undefined;
    summary: string;
    accomplishments: string[];
    location?: string | undefined;

    constructor(_position?: IPosition) {
        this.title = _position?.title || '';
        this.team = _position?.team;
        this.summary = _position?.summary || '';
        this.accomplishments = _position?.accomplishments || [];
        this.location = _position?.location;
    }
}
