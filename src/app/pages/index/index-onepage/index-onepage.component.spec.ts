import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexOnepageComponent } from './index-onepage.component';

describe('IndexOnepageComponent', () => {
  let component: IndexOnepageComponent;
  let fixture: ComponentFixture<IndexOnepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexOnepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexOnepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
