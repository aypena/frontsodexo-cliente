import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewscComponent } from './newsc.component';

describe('NewscComponent', () => {
  let component: NewscComponent;
  let fixture: ComponentFixture<NewscComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewscComponent]
    });
    fixture = TestBed.createComponent(NewscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
