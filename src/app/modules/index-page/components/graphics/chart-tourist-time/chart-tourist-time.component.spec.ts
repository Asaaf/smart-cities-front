import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTouristTimeComponent } from './chart-tourist-time.component';

describe('ChartTouristTimeComponent', () => {
  let component: ChartTouristTimeComponent;
  let fixture: ComponentFixture<ChartTouristTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartTouristTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTouristTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
