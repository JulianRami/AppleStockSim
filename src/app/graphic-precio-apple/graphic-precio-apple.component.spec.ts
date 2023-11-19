import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicPrecioAppleComponent } from './graphic-precio-apple.component';

describe('GraphicPrecioAppleComponent', () => {
  let component: GraphicPrecioAppleComponent;
  let fixture: ComponentFixture<GraphicPrecioAppleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphicPrecioAppleComponent]
    });
    fixture = TestBed.createComponent(GraphicPrecioAppleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
