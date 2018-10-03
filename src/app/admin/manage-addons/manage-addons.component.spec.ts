import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAddonsComponent } from './manage-addons.component';

describe('ManageAddonsComponent', () => {
  let component: ManageAddonsComponent;
  let fixture: ComponentFixture<ManageAddonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAddonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
