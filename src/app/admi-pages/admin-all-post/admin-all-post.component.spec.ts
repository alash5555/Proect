import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllPostComponent } from './admin-all-post.component';

describe('AdminAllPostComponent', () => {
  let component: AdminAllPostComponent;
  let fixture: ComponentFixture<AdminAllPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAllPostComponent]
    });
    fixture = TestBed.createComponent(AdminAllPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
