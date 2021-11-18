import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KogoutComponent } from './kogout.component';

describe('KogoutComponent', () => {
  let component: KogoutComponent;
  let fixture: ComponentFixture<KogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
