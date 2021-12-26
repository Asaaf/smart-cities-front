import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTouristActivitiesComponent } from './chart-tourist-activities.component';

describe('ChartTouristActivitiesComponent', () => {
  let component: ChartTouristActivitiesComponent;
  let fixture: ComponentFixture<ChartTouristActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartTouristActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTouristActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
