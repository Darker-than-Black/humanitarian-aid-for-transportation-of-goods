import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsTableDataComponent } from './goods-table-data.component';

describe('GoodsTableDataComponent', () => {
  let component: GoodsTableDataComponent;
  let fixture: ComponentFixture<GoodsTableDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsTableDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsTableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
