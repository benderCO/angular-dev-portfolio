import { ICv } from "../interfaces/icv";
import { IPosition } from "../interfaces/iposition";

export class Cv implements ICv {
    positions: IPosition[] = [];

    constructor(_cv?: ICv) {
        this.positions = _cv?.positions || [];
    }
}
