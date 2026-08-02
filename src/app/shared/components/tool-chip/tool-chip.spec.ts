import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolChip } from './tool-chip';

describe('ToolChip', () => {
  let component: ToolChip;
  let fixture: ComponentFixture<ToolChip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolChip],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolChip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
