import { ISummary } from "../interfaces/isummary";

export class Summary implements ISummary{
    text: string[];

    constructor(_summary?: ISummary) {
        this.text = _summary?.text || [];
    }
}
