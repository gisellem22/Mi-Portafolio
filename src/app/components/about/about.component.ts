import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../services/skills.service'
import { skill } from 'src/app/models/skill';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  skills: skill[];

  constructor(public SkillsService: SkillsService) { }

  ngOnInit() {
    this.SkillsService.getSkillsList().subscribe(skills => {
      this.skills =skills;
      console.log(this.skills)
    });
  }
}
