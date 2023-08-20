import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperhumanPostComponent } from './superhuman-post.component';

describe('SuperhumanPostComponent', () => {
  let component: SuperhumanPostComponent;
  let fixture: ComponentFixture<SuperhumanPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperhumanPostComponent]
    });
    fixture = TestBed.createComponent(SuperhumanPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
