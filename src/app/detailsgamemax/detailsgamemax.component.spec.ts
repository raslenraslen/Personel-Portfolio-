import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsgamemaxComponent } from './detailsgamemax.component';

describe('DetailsgamemaxComponent', () => {
  let component: DetailsgamemaxComponent;
  let fixture: ComponentFixture<DetailsgamemaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsgamemaxComponent]
    });
    fixture = TestBed.createComponent(DetailsgamemaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
