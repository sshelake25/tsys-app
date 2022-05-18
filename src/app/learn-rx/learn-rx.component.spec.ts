import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnRxComponent } from './learn-rx.component';

describe('LearnRxComponent', () => {
  let component: LearnRxComponent;
  let fixture: ComponentFixture<LearnRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnRxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
