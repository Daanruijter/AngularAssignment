import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDaanComponent } from './daan.component';

describe('PageDaannomponent', () => {
  let component: PageDaanComponent;
  let fixture: ComponentFixture<PageDaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
