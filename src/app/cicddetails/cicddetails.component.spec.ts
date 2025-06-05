import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicddetailsComponent } from './cicddetails.component';

describe('CicddetailsComponent', () => {
  let component: CicddetailsComponent;
  let fixture: ComponentFixture<CicddetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CicddetailsComponent]
    });
    fixture = TestBed.createComponent(CicddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
