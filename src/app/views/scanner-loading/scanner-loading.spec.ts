import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerLoading } from './scanner-loading';

describe('ScannerLoading', () => {
  let component: ScannerLoading;
  let fixture: ComponentFixture<ScannerLoading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScannerLoading]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScannerLoading);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
