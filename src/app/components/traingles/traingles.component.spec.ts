import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainglesComponent } from './traingles.component';

describe('TrainglesComponent', () => {
  let component: TrainglesComponent;
  let fixture: ComponentFixture<TrainglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainglesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
