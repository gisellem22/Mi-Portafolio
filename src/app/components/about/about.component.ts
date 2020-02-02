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

  slides = [
    {img: "../../../assets/img/watercolors/across.png"},
    {img: "../../../assets/img/watercolors/aurora.png"},
    {img: "../../../assets/img/watercolors/bird.png"},
    {img: "../../../assets/img/watercolors/libertad.png"},
    {img: "../../../assets/img/watercolors/mont.png"}
  ];

  constructor(public SkillsService: SkillsService) { }

  ngOnInit() {
    this.SkillsService.getSkillsList().subscribe(skills => {
      this.skills =skills;
    });
    this.SkillsService.getWatercolorsList().subscribe(watercolors => {
      this.watercolors =watercolors;
    });
  }

  slideConfig = {
    "centerMode": true,
    "centerPadding": '100px',
    "slidesToShow": 3, 
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 2000,
    "nextArrow":"<div class='nav-btn next-slide'></div>",
    "prevArrow":"<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": true,
    "responsive": [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '80px',
          slidesToShow: 2,
          autoplay: true,

        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          autoplay: true,
        }
      }
    ]
  };

}
