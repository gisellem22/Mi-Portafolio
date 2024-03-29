import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../services/skills.service';
import { skill } from 'src/app/models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

skills: skill[];
skills2: skill[];


  constructor(public skillsService: SkillsService) { }

  ngOnInit() {
this.skillsService.getSkillsList().subscribe(skills => {
      this.skills = skills;
    });
this.skillsService.getSkillsList2().subscribe(skills2 => {
      this.skills2 = skills2;
    });
  }

}
