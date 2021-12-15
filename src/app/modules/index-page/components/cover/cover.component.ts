import { AfterViewInit, Component, OnInit } from '@angular/core';
import { indexAnimations } from './animations';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css'],
  animations: [indexAnimations.titleAnimation]
})
export class CoverComponent implements OnInit, AfterViewInit {
  faBars = faBars;
  faTimes = faTimes;
  letterAnimation: string = "compressed";
  title: string[] = "SMART CITIES".split("");
  loading: boolean = true;
  animation: any;
  menu: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.titleAnimation();
  }

  ngAfterViewInit() {
    clearInterval(this.animation);
  }

  titleAnimation() {
    this.animation = setInterval(() => {
      if (this.loading) {
        if (this.letterAnimation !== 'compressed') {
          this.letterAnimation = "compressed";
        }
      }
    }, 2000);
  }

  showMenu() {
    this.menu = !this.menu;
  }

}
