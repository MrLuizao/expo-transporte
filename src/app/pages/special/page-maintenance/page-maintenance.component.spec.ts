import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMaintenanceComponent } from './page-maintenance.component';

describe('PageMaintenanceComponent', () => {
  let component: PageMaintenanceComponent;
  let fixture: ComponentFixture<PageMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMaintenanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
