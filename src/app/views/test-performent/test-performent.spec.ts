import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPerforment } from './test-performent';

describe('TestPerforment', () => {
  let component: TestPerforment;
  let fixture: ComponentFixture<TestPerforment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestPerforment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPerforment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
