import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoCpComponent } from './segundo-cp.component';

describe('SegundoCpComponent', () => {
  let component: SegundoCpComponent;
  let fixture: ComponentFixture<SegundoCpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundoCpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
