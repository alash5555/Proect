import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAhutorsComponent } from './admin-ahutors.component';

describe('AdminAhutorsComponent', () => {
  let component: AdminAhutorsComponent;
  let fixture: ComponentFixture<AdminAhutorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAhutorsComponent]
    });
    fixture = TestBed.createComponent(AdminAhutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
