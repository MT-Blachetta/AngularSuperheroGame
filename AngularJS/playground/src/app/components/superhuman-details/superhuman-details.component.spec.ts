import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperhumanDetailsComponent } from './superhuman-details.component';

describe('SuperhumanDetailsComponent', () => {
  let component: SuperhumanDetailsComponent;
  let fixture: ComponentFixture<SuperhumanDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperhumanDetailsComponent]
    });
    fixture = TestBed.createComponent(SuperhumanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
