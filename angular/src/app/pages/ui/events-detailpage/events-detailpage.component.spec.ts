import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsDetailpageComponent } from './events-detailpage.component';

describe('EventsDetailpageComponent', () => {
  let component: EventsDetailpageComponent;
  let fixture: ComponentFixture<EventsDetailpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsDetailpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsDetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
