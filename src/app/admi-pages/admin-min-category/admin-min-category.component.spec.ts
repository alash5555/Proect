import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMinCategoryComponent } from './admin-min-category.component';

describe('AdminMinCategoryComponent', () => {
  let component: AdminMinCategoryComponent;
  let fixture: ComponentFixture<AdminMinCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMinCategoryComponent]
    });
    fixture = TestBed.createComponent(AdminMinCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
