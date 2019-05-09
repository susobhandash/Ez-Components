import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundProgressComponent } from './round-progress.component';

describe('RoundProgressComponent', () => {
  let component: RoundProgressComponent;
  let fixture: ComponentFixture<RoundProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
