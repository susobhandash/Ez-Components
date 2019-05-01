import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReorderlistComponent } from './reorderlist.component';

describe('ReorderlistComponent', () => {
  let component: ReorderlistComponent;
  let fixture: ComponentFixture<ReorderlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReorderlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReorderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
