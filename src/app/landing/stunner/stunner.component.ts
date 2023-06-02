import { Component, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as $ from 'jquery';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-stunner',
  templateUrl: './stunner.component.html',
  styleUrls: ['./stunner.component.scss'],
})
export class StunnerComponent implements AfterViewInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit(): void {
    //!start here
    gsap.from(this.document.querySelector('.split')!.childNodes, {
      yPercent: 130,
      ease: 'linear',
      stagger: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '.split',
        // trigger element - viewport
        start: 'top 94%',
        end: 'bottom 35%',
        scrub: 0.7,
      },
    });
    gsap.from(this.document.querySelector('.splitmb')!.childNodes, {
      yPercent: 150,
      ease: 'linear',
      stagger: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '.splitmb',
        // trigger element - viewport
        start: 'top 90%',
        end: 'bottom 35%',
        scrub: 0.5,
      },
    });
    //4 texts animation that hides them on scroll to top
    $('.header_text-move').each(function (index) {
      let triggerElement = $(this);
      let targetElement = $(this);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          // trigger element - viewport
          start: 'top 18%',
          end: '40% top',
          scrub: 1,
        },
      });
      tl.to(targetElement, {
        y: '100%',
        duration: 1,
      });
    });

    // Sticky Cirlce with img that expands to fill the screen
    $('.sticky-circle-wrapper').each(function (index) {
      let triggerElement = $(this);
      let targetElement = $('.sticky-circle-element');

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
        targetElement,
        {
          width: '30vw',
          height: '20vw',
          borderRadius: '35em',
          duration: 1,
        },
        {
          width: '90vw',
          height: '90vh',
          borderRadius: '5em',
          duration: 1,
        }
      );
    });

    //bg color change anim on the sticky Circle
    $('.sticky-circle-wrapper').each(function (index) {
      let triggerElement = $(this);
      let targetElement = $('.sticky-circle-wrapper');

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          // trigger element - viewport
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.8,
        },
      });
      tl.to(targetElement, {
        backgroundColor: '#EAF2FF',
      });
    });
  }
}
