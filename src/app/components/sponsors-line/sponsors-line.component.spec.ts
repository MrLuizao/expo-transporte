import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsLineComponent } from './sponsors-line.component';

describe('SponsorsLineComponent', () => {
  let component: SponsorsLineComponent;
  let fixture: ComponentFixture<SponsorsLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsorsLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorsLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
