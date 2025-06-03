import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastucuredetailsComponent } from './infrastucuredetails.component';

describe('InfrastucuredetailsComponent', () => {
  let component: InfrastucuredetailsComponent;
  let fixture: ComponentFixture<InfrastucuredetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfrastucuredetailsComponent]
    });
    fixture = TestBed.createComponent(InfrastucuredetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
