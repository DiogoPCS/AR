import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPistaComponent } from './modificar-pista.component';

describe('ModificarPistaComponent', () => {
  let component: ModificarPistaComponent;
  let fixture: ComponentFixture<ModificarPistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarPistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarPistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
