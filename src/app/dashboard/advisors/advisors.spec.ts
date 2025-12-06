import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Advisors } from './advisors';

describe('Advisors', () => {
  let component: Advisors;
  let fixture: ComponentFixture<Advisors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Advisors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Advisors);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
