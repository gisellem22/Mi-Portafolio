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
  constructor(public skillsService: SkillsService) { }

  ngOnInit() {
    this.skillsService.getProjectsList().subscribe(projects => {
      this.projects =projects;
    });
  }

}
