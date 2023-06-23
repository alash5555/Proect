import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FottofComponent } from './fottof.component';

describe('FottofComponent', () => {
  let component: FottofComponent;
  let fixture: ComponentFixture<FottofComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FottofComponent]
    });
    fixture = TestBed.createComponent(FottofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
