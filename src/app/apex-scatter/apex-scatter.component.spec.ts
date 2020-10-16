import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexScatterComponent } from './apex-scatter.component';

describe('ApexScatterComponent', () => {
  let component: ApexScatterComponent;
  let fixture: ComponentFixture<ApexScatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexScatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexScatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
