import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgroupsComponent } from './addgroups.component';

describe('AddgroupsComponent', () => {
  let component: AddgroupsComponent;
  let fixture: ComponentFixture<AddgroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
