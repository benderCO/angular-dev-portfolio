import { Injectable } from '@angular/core';

import resume from '../../data/resume.json';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }

  loadResume() {
     console.log(resume);
  }
}
