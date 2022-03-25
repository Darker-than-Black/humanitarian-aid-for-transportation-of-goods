import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionalDestinationFormComponent } from './provisional-destination-form.component';

describe('ProvisionalDestinationFormComponent', () => {
  let component: ProvisionalDestinationFormComponent;
  let fixture: ComponentFixture<ProvisionalDestinationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvisionalDestinationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionalDestinationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
