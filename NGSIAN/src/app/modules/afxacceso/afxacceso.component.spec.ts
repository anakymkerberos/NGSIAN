import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AFXAccesoComponent } from './afxacceso.component';

describe('AFXAccesoComponent', () => {
  let component: AFXAccesoComponent;
  let fixture: ComponentFixture<AFXAccesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AFXAccesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AFXAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
