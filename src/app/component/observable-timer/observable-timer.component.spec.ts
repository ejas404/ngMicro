import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableTimerComponent } from './observable-timer.component';

describe('ObservableTimerComponent', () => {
  let component: ObservableTimerComponent;
  let fixture: ComponentFixture<ObservableTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableTimerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservableTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
