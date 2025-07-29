import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatiosComponent } from './RatiosComponent';

describe('RatiosComponent', () => {
  let component: RatiosComponent;
  let fixture: ComponentFixture<RatiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
