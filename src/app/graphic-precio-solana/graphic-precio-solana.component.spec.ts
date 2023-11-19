import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicPrecioSolanaComponent } from './graphic-precio-solana.component';

describe('GraphicPrecioSolanaComponent', () => {
  let component: GraphicPrecioSolanaComponent;
  let fixture: ComponentFixture<GraphicPrecioSolanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphicPrecioSolanaComponent]
    });
    fixture = TestBed.createComponent(GraphicPrecioSolanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
