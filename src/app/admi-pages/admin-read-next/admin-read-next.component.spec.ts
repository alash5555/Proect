import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReadNextComponent } from './admin-read-next.component';

describe('AdminReadNextComponent', () => {
  let component: AdminReadNextComponent;
  let fixture: ComponentFixture<AdminReadNextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminReadNextComponent]
    });
    fixture = TestBed.createComponent(AdminReadNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
