import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgroupInfoModalComponent } from './subgroup-info-modal.component';

describe('SubgroupInfoModalComponent', () => {
  let component: SubgroupInfoModalComponent;
  let fixture: ComponentFixture<SubgroupInfoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubgroupInfoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubgroupInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
