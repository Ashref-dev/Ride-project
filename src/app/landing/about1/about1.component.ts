import {
  Component,
  Inject,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about1',
  templateUrl: './about1.component.html',
  styleUrls: ['./about1.component.scss'],
})
export class About1Component implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  @ViewChild('list2', { static: true }) list2!: ElementRef;

  ngOnInit(): void {
    gsap.from(this.list2.nativeElement.childNodes, {
      duration: 1,
      opacity: 0,
      stagger: 0.3,
      delay: 0.2,
    });
  }
}
