import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhutorPostComponent } from './ahutor-post.component';

describe('AhutorPostComponent', () => {
  let component: AhutorPostComponent;
  let fixture: ComponentFixture<AhutorPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AhutorPostComponent]
    });
    fixture = TestBed.createComponent(AhutorPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
