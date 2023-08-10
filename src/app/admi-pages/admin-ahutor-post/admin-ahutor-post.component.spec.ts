import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAhutorPostComponent } from './admin-ahutor-post.component';

describe('AdminAhutorPostComponent', () => {
  let component: AdminAhutorPostComponent;
  let fixture: ComponentFixture<AdminAhutorPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAhutorPostComponent]
    });
    fixture = TestBed.createComponent(AdminAhutorPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
