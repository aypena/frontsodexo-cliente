import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedNewsEntitysComponent } from './featured-news-entitys.component';

describe('FeaturedNewsEntitysComponent', () => {
  let component: FeaturedNewsEntitysComponent;
  let fixture: ComponentFixture<FeaturedNewsEntitysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedNewsEntitysComponent]
    });
    fixture = TestBed.createComponent(FeaturedNewsEntitysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
