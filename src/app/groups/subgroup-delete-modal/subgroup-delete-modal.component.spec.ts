import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgroupDeleteModalComponent } from './subgroup-delete-modal.component';

describe('SubgroupDeleteModalComponent', () => {
  let component: SubgroupDeleteModalComponent;
  let fixture: ComponentFixture<SubgroupDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubgroupDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubgroupDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
