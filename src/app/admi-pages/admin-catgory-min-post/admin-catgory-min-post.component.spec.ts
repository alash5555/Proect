import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCatgoryMinPostComponent } from './admin-catgory-min-post.component';

describe('AdminCatgoryMinPostComponent', () => {
  let component: AdminCatgoryMinPostComponent;
  let fixture: ComponentFixture<AdminCatgoryMinPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCatgoryMinPostComponent]
    });
    fixture = TestBed.createComponent(AdminCatgoryMinPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
