import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExfirebasecrudComponent } from './exfirebasecrud.component';

describe('ExfirebasecrudComponent', () => {
  let component: ExfirebasecrudComponent;
  let fixture: ComponentFixture<ExfirebasecrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExfirebasecrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExfirebasecrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
