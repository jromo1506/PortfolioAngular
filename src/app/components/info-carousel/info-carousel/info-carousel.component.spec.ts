import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCarouselComponent } from './info-carousel.component';

describe('InfoCarouselComponent', () => {
  let component: InfoCarouselComponent;
  let fixture: ComponentFixture<InfoCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InfoCarouselComponent]
    });
    fixture = TestBed.createComponent(InfoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
