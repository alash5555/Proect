import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPpostComponent } from './all-ppost.component';

describe('AllPpostComponent', () => {
  let component: AllPpostComponent;
  let fixture: ComponentFixture<AllPpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllPpostComponent]
    });
    fixture = TestBed.createComponent(AllPpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
