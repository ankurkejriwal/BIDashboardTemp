import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertHomeComponent } from './cert-home.component';

describe('CertHomeComponent', () => {
  let component: CertHomeComponent;
  let fixture: ComponentFixture<CertHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
