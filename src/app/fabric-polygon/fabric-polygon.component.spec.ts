import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricPolygonComponent } from './fabric-polygon.component';

describe('FabricPolygonComponent', () => {
  let component: FabricPolygonComponent;
  let fixture: ComponentFixture<FabricPolygonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabricPolygonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricPolygonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
