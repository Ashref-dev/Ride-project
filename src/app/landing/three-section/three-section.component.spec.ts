import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeSectionComponent } from './three-section.component';

describe('ThreeSectionComponent', () => {
  let component: ThreeSectionComponent;
  let fixture: ComponentFixture<ThreeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
