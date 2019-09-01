import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { skill } from '../models/skill';
import { skills } from '../skills-list'
import { project } from '../models/project';
import { projects } from '../projects-list';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }


  getSkillsList(): Observable<skill[]> {
    return of(skills);
  }
  getProjectsList(): Observable<project[]> {
    return of(projects);
  }
}

