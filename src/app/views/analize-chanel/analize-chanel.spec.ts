import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalizeChanel } from './analize-chanel';

describe('AnalizeChanel', () => {
  let component: AnalizeChanel;
  let fixture: ComponentFixture<AnalizeChanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalizeChanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalizeChanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
