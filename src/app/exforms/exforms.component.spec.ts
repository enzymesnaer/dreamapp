import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExformsComponent } from './exforms.component';

describe('ExformsComponent', () => {
  let component: ExformsComponent;
  let fixture: ComponentFixture<ExformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
