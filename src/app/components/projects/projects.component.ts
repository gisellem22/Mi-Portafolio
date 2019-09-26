import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';
import { project } from 'src/app/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
projects: project[];
  constructor(public SkillsService: SkillsService) { }

  ngOnInit() {
    this.SkillsService.getProjectsList().subscribe(projects => {
      this.projects =projects;
      console.log(this.projects)
    });
  }

}
