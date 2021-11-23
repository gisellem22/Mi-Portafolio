import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { EN } from "../../../assets/i18n/en";
import { ES } from "../../../assets/i18n/es";
import { PT } from "../../../assets/i18n/pt";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  currentUrl: string;
  public activeLanguaje: string;
  languages = [
    {
      value: "es",
      name: "Español",
    },
    {
      value: "en",
      name: "Inglés",
    },
    {
      value: "pt",
      name: "Portugués",
    },
  ];

  constructor(private translate: TranslateService, private router: Router) {
    this.translate.setDefaultLang(this.activeLanguaje);
    this.translate.setTranslation(this.activeLanguaje, ES);
    this.translate.use(this.activeLanguaje);
  }

  ngOnInit() {
    // this.activeLanguaje = 'es';
    this.currentUrl = this.router.url.slice(1);
    console.log(this.currentUrl);
  }

  changeLanguaje(event: any) {
    this.activeLanguaje = event.target.value;
    switch (this.activeLanguaje) {
      case "es":
        this.translate.setTranslation(this.activeLanguaje, ES);
        break;
      case "en":
        this.translate.setTranslation(this.activeLanguaje, EN);
        break;
      case "pt":
        this.translate.setTranslation(this.activeLanguaje, PT);
        break;
    }
    this.translate.use(this.activeLanguaje);
  }
}
