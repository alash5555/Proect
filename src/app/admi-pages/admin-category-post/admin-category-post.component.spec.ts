import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryPostComponent } from './admin-category-post.component';

describe('AdminCategoryPostComponent', () => {
  let component: AdminCategoryPostComponent;
  let fixture: ComponentFixture<AdminCategoryPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCategoryPostComponent]
    });
    fixture = TestBed.createComponent(AdminCategoryPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
