import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTuristPlaceComponent } from './chart-turist-place.component';

describe('ChartTuristPlaceComponent', () => {
  let component: ChartTuristPlaceComponent;
  let fixture: ComponentFixture<ChartTuristPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartTuristPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTuristPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
