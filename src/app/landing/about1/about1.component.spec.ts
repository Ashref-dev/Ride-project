import { ComponentFixture, TestBed } from '@angular/core/testing';

import { About1Component } from './about1.component';

describe('About1Component', () => {
  let component: About1Component;
  let fixture: ComponentFixture<About1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ About1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(About1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
