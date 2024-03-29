import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { skill } from '../models/skill';
import { skills } from '../skills-list';
import { skills2 } from '../skills-list-2';
import { project } from '../models/project';
import { projects } from '../projects-list';
import { watercolors } from '../watercolors-list';
import { art } from '../models/art';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }


  getSkillsList(): Observable<skill[]> {
    return of(skills);
  }

  getSkillsList2(): Observable<skill[]> {
    return of(skills2);
  }

  getProjectsList(): Observable<project[]> {
    return of(projects);
  }
  getWatercolorsList(): Observable<art[]> {
    return of(watercolors);
  }
}

