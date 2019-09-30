import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../services/skills.service'
import { skill } from 'src/app/models/skill';
import { art } from 'src/app/models/art';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  skills: skill[];
  watercolors: art[];

  constructor(public SkillsService: SkillsService) { }

  ngOnInit() {
    this.SkillsService.getSkillsList().subscribe(skills => {
      this.skills =skills;
    });
    this.SkillsService.getWatercolorsList().subscribe(watercolors => {
      this.watercolors =watercolors;
    });
  }
}
