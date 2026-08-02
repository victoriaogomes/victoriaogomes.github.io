import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationList } from './publication-list';

describe('PublicationList', () => {
  let component: PublicationList;
  let fixture: ComponentFixture<PublicationList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicationList],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicationList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
