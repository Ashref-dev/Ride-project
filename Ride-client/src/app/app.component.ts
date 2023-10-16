import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor() {}

  @ViewChild('preloader') preloader!: ElementRef;
  ngAfterViewInit() {
    //load event trick
    window.addEventListener('load', () => {
      gsap.to('.preloader', { duration: 1, opacity: 0 }).then(() => {
        this.preloader.nativeElement.classList.add('makeDisplayNone');
      });
    });
  }
}
