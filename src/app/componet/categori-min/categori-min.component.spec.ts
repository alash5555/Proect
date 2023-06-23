import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriMinComponent } from './categori-min.component';

describe('CategoriMinComponent', () => {
  let component: CategoriMinComponent;
  let fixture: ComponentFixture<CategoriMinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriMinComponent]
    });
    fixture = TestBed.createComponent(CategoriMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
