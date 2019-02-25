import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteClassComponent } from './promote-class.component';

describe('PromoteClassComponent', () => {
  let component: PromoteClassComponent;
  let fixture: ComponentFixture<PromoteClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoteClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoteClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
