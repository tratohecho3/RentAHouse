import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalPropertiesComponent } from './rental-properties.component';

describe('RentalPropertiesComponent', () => {
  let component: RentalPropertiesComponent;
  let fixture: ComponentFixture<RentalPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
