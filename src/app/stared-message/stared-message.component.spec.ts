import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaredMessageComponent } from './stared-message.component';

describe('StaredMessageComponent', () => {
  let component: StaredMessageComponent;
  let fixture: ComponentFixture<StaredMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaredMessageComponent]
    });
    fixture = TestBed.createComponent(StaredMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
