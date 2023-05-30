import {
  Component,
  Inject,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  @ViewChild('preloader') preloader!: ElementRef;
  ngAfterViewInit() {
    console.log(document.readyState);

    window.addEventListener('load', () => {
      console.log('load listener engaged');

      this.preloader.nativeElement.style.display = 'none';
    });

    //mehtod 2
    this.document.addEventListener('readystatechange', () =>
      console.log(document.readyState)
    );
  }
}
