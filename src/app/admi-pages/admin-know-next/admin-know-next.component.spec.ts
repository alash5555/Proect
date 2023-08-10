import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKnowNextComponent } from './admin-know-next.component';

describe('AdminKnowNextComponent', () => {
  let component: AdminKnowNextComponent;
  let fixture: ComponentFixture<AdminKnowNextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminKnowNextComponent]
    });
    fixture = TestBed.createComponent(AdminKnowNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
