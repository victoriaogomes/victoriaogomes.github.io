import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBadge } from './icon-badge';

describe('IconBadge', () => {
  let component: IconBadge;
  let fixture: ComponentFixture<IconBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconBadge],
    }).compileComponents();

    fixture = TestBed.createComponent(IconBadge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
