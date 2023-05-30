import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Inject,
  AfterViewInit,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about2',
  templateUrl: './about2.component.html',
  styleUrls: ['./about2.component.scss'],
})
export class About2Component implements AfterViewInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngAfterViewInit(): void {
   
  }
}
