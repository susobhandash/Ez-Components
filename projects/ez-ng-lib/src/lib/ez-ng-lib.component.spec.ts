import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EzNgLibComponent } from './ez-ng-lib.component';

describe('EzNgLibComponent', () => {
  let component: EzNgLibComponent;
  let fixture: ComponentFixture<EzNgLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzNgLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzNgLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
