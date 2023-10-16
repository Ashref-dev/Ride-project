import { Component, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-physics-section',
  templateUrl: './physics-section.component.html',
  styleUrls: ['./physics-section.component.scss'],
})
export class PhysicsSectionComponent implements AfterViewInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit(): void {}
}
