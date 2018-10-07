import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFlavorComponent } from './manage-flavor.component';

describe('ManageFlavorComponent', () => {
  let component: ManageFlavorComponent;
  let fixture: ComponentFixture<ManageFlavorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFlavorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFlavorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
