import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhutorComponent } from './ahutor.component';

describe('AhutorComponent', () => {
  let component: AhutorComponent;
  let fixture: ComponentFixture<AhutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AhutorComponent]
    });
    fixture = TestBed.createComponent(AhutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
