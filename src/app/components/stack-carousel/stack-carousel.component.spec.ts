import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackCarouselComponent } from './stack-carousel.component';

describe('StackCarouselComponent', () => {
  let component: StackCarouselComponent;
  let fixture: ComponentFixture<StackCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StackCarouselComponent]
    });
    fixture = TestBed.createComponent(StackCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
