import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperhumanListComponent } from './superhuman-list.component';

describe('SuperhumanListComponent', () => {
  let component: SuperhumanListComponent;
  let fixture: ComponentFixture<SuperhumanListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperhumanListComponent]
    });
    fixture = TestBed.createComponent(SuperhumanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
