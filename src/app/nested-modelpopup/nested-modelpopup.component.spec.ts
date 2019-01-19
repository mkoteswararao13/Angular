import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedModelpopupComponent } from './nested-modelpopup.component';

describe('NestedModelpopupComponent', () => {
  let component: NestedModelpopupComponent;
  let fixture: ComponentFixture<NestedModelpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedModelpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedModelpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
