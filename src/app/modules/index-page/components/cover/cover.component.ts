import { AfterViewInit, Component, OnInit } from '@angular/core';
import { indexAnimations } from './animations';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css'],
  animations: [indexAnimations.titleAnimation]
})
export class CoverComponent implements OnInit, AfterViewInit {
  letterAnimation: string = "compressed";
  title: string[] = "PILOTO".split("");
  loading: boolean = true;
  animation: any;

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

}
