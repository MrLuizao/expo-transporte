import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexExpoComponent } from './index-expo.component';

describe('IndexExpoComponent', () => {
  let component: IndexExpoComponent;
  let fixture: ComponentFixture<IndexExpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexExpoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexExpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
