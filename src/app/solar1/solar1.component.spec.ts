import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solar1Component } from './solar1.component';

describe('Solar1Component', () => {
  let component: Solar1Component;
  let fixture: ComponentFixture<Solar1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Solar1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Solar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
