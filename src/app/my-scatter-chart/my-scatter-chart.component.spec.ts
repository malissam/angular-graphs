import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyScatterChartComponent } from './my-scatter-chart.component';

describe('MyScatterChartComponent', () => {
  let component: MyScatterChartComponent;
  let fixture: ComponentFixture<MyScatterChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyScatterChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyScatterChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
