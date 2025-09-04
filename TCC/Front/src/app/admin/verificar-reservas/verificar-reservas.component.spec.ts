import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarReservasComponent } from './verificar-reservas.component';

describe('VerificarReservasComponent', () => {
  let component: VerificarReservasComponent;
  let fixture: ComponentFixture<VerificarReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificarReservasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
