import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPersonsComponent } from './view-all-persons.component';

describe('ViewAllPersonsComponent', () => {
  let component: ViewAllPersonsComponent;
  let fixture: ComponentFixture<ViewAllPersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllPersonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
