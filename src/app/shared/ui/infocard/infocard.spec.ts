import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infocard } from './infocard';

describe('Infocard', () => {
  let component: Infocard;
  let fixture: ComponentFixture<Infocard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infocard],
    }).compileComponents();

    fixture = TestBed.createComponent(Infocard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
