import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { skill } from '../models/skill';
import { skills } from '../skills-list'

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }


  getSkillsList(): Observable<skill[]> {
    return of(skills);
  }
}

