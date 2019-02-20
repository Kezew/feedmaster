import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionPieComponent } from './nutrition-pie.component';

describe('NutritionPieComponent', () => {
  let component: NutritionPieComponent;
  let fixture: ComponentFixture<NutritionPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
