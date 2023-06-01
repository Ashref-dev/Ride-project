import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  @ViewChild('list2', { static: true }) list2!: ElementRef;

  @ViewChild('girlPhoto', { static: true }) girlPhoto!: ElementRef;
  @ViewChild('scrollDown', { static: true }) scrollDown!: ElementRef;

  ngOnInit(): void {
    window.addEventListener('load', () => {
      this.initAnimations();
    });
  }
  initAnimations(): void {
    // mobile anim

    gsap.from(this.girlPhoto.nativeElement, {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.5,
    });

    gsap.from(this.document.querySelector('#girlPhotoMobile'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 2,
    });

    gsap.from(this.document.querySelectorAll('#bigText'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.6,
    });
    gsap.from(this.document.querySelectorAll('#subText'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.8,
    });
    gsap.from(this.document.querySelectorAll('#gradientButton'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 1,
    });
    gsap.from(this.scrollDown.nativeElement, {
      duration: 0.7,
      opacity: 0,
      y: +30,
      delay: 2.6,
    });
  }
}
