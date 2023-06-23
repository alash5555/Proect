import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeautComponent } from './leaut.component';

describe('LeautComponent', () => {
  let component: LeautComponent;
  let fixture: ComponentFixture<LeautComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeautComponent]
    });
    fixture = TestBed.createComponent(LeautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
