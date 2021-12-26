import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTouristPlaceComponent } from './chart-tourist-place.component';

describe('ChartTuristPlaceComponent', () => {
  let component: ChartTouristPlaceComponent;
  let fixture: ComponentFixture<ChartTouristPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartTouristPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTouristPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
