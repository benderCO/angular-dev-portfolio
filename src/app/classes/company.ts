import { ICompany } from 'src/app/interfaces/icompany';
import { IPosition } from 'src/app/interfaces/iposition';

export class Company implements ICompany {
    name: string;
    positions: IPosition[];
    summary?: string | undefined;
    location?: string | undefined;
    startMonth?: number | undefined;
    startYear?: number | undefined;
    endMonth?: number | undefined;
    endYear?: number | undefined;

    constructor(_company?: ICompany) {
        this.name = _company?.name || '';
        this.positions = _company?.positions || [];
        this.summary = _company?.summary || '';
        this.location = _company?.location || '';
        this.startMonth = _company?.startMonth || 0;
        this.startYear = _company?.startYear || 0;
        this.endMonth = _company?.endMonth || 0;
        this.endMonth = _company?.endMonth || 0;
        this.endYear = _company?.endYear || 0;
    }
}
