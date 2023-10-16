import {
  Component,
  ElementRef,
  ViewChild,
  Inject,
  AfterViewInit,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as $ from 'jquery';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-steps-section',
  templateUrl: './steps-section.component.html',
  styleUrls: ['./steps-section.component.scss'],
})
export class StepsSectionComponent implements AfterViewInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit(): void {
    // !Grid Title Change
    $('.grid-text_item').eq(0).addClass('is--active');
    // Run a function
    $('.grid_wrapper').each(function (index) {
      let triggerElement = $(this);
      let myIndex = $(this).index();
      let targetElement = $('.grid-text_item').eq(myIndex);
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          // trigger element - viewport
          start: 'top bottom',
          end: 'bottom bottom',
          onEnter: () => {
            $('.grid-text_item').removeClass('is--active');
            targetElement.addClass('is--active');
          },
          onEnterBack: () => {
            $('.grid-text_item').removeClass('is--active');
            targetElement.addClass('is--active');
          },
        },
      });
    });

    //!change color even
    $('.grid_wrapper:nth-child(even)').each(function (index) {
      let triggerElement = $(this);
      let targetElement = $(this);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          // trigger element - viewport
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          
        },
      });
      tl.fromTo(
        '.grid_wrapper',
        {
          backgroundColor: '#8743ff',
          color: 'white',
        },
        {
          backgroundColor: '#eaf2ff',
          color: 'black',
        }
      );
    });
    //!change color odd
    $('.grid_wrapper:nth-child(odd)').each(function (index) {
      let triggerElement = $(this);
      let targetElement = $(this);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          // trigger element - viewport
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
         
        },
      });
      tl.fromTo(
        '.grid_wrapper',
        {
          backgroundColor: 'white',
          color: 'black',
        },
        {
          backgroundColor: '#8743ff',
          color: 'white',
        }
      );
    });
  }
}
