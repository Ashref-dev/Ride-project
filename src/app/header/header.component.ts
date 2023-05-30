import { DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  currentUser: any = '';
  @ViewChild('logoImg2', { static: true }) logoImg2!: ElementRef;

  @ViewChild('navButton', { static: true }) navButton!: ElementRef;
  @ViewChild('list', { static: true }) list!: ElementRef;

  //mobile
  @ViewChild('logoImg', { static: true }) logoImg!: ElementRef;
  @ViewChild('hamburger', { static: true }) hamburger!: ElementRef;

  ngOnInit(): void {
    gsap.from(this.logoImg2.nativeElement, {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.3,
    });

    gsap.from(this.list.nativeElement.childNodes, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.3,
      delay: 0.5,
    });

    // gsap.from(this.navButton.nativeElement, {
    //   duration: 0.7,
    //   opacity: 0,
    //   y: -30,
    //   delay: 1.7,
    // });
    //mobile below
    gsap.from(this.logoImg.nativeElement, {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.3,
    });
    gsap.from(this.hamburger.nativeElement, {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.3,
    });

    //local storage user
    const data = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(data!);
    console.log('current user', this.currentUser);
  }
  clearAll() {
    localStorage.clear();
    window.location.reload();
  }
}
