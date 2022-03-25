import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsInfoComponent } from './items-info.component';

describe('ItemsInfoComponent', () => {
  let component: ItemsInfoComponent;
  let fixture: ComponentFixture<ItemsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
