import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLookupComponent } from './section-lookup.component';

describe('SectionLookupComponent', () => {
  let component: SectionLookupComponent;
  let fixture: ComponentFixture<SectionLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
