import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLineMarqueeComponent } from './one-line-marquee.component';

describe('OneLineMarqueeComponent', () => {
  let component: OneLineMarqueeComponent;
  let fixture: ComponentFixture<OneLineMarqueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneLineMarqueeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneLineMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
