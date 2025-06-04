import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelinedetailsComponent } from './pipelinedetails.component';

describe('PipelinedetailsComponent', () => {
  let component: PipelinedetailsComponent;
  let fixture: ComponentFixture<PipelinedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipelinedetailsComponent]
    });
    fixture = TestBed.createComponent(PipelinedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
