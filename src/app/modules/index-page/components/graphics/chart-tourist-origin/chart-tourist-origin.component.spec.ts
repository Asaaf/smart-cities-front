import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTouristOriginComponent } from './chart-tourist-origin.component';

describe('ChartTuristOriginComponent', () => {
  let component: ChartTouristOriginComponent;
  let fixture: ComponentFixture<ChartTouristOriginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartTouristOriginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTouristOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
