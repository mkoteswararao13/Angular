import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChkformComponent } from './chkform.component';

describe('ChkformComponent', () => {
  let component: ChkformComponent;
  let fixture: ComponentFixture<ChkformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChkformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChkformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
