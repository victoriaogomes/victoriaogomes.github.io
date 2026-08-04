import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationDetail } from './publication-detail';

describe('PublicationDetail', () => {
  let component: PublicationDetail;
  let fixture: ComponentFixture<PublicationDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicationDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicationDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
