import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTuristTimeComponent } from './chart-turist-time.component';

describe('ChartTuristTimeComponent', () => {
  let component: ChartTuristTimeComponent;
  let fixture: ComponentFixture<ChartTuristTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartTuristTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTuristTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
