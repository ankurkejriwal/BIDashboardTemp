import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDashBoardComponent } from './section-dash-board.component';

describe('SectionDashBoardComponent', () => {
  let component: SectionDashBoardComponent;
  let fixture: ComponentFixture<SectionDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
