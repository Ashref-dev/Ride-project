import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicsSectionComponent } from './physics-section.component';

describe('PhysicsSectionComponent', () => {
  let component: PhysicsSectionComponent;
  let fixture: ComponentFixture<PhysicsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
