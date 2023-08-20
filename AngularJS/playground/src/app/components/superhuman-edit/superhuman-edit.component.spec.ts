import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperhumanEditComponent } from './superhuman-edit.component';

describe('SuperhumanEditComponent', () => {
  let component: SuperhumanEditComponent;
  let fixture: ComponentFixture<SuperhumanEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperhumanEditComponent]
    });
    fixture = TestBed.createComponent(SuperhumanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
