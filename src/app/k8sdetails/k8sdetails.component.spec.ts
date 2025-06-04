import { ComponentFixture, TestBed } from '@angular/core/testing';

import { K8sdetailsComponent } from './k8sdetails.component';

describe('K8sdetailsComponent', () => {
  let component: K8sdetailsComponent;
  let fixture: ComponentFixture<K8sdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [K8sdetailsComponent]
    });
    fixture = TestBed.createComponent(K8sdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
