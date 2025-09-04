import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarCardapioComponent } from './modificar-cardapio.component';

describe('ModificarCardapioComponent', () => {
  let component: ModificarCardapioComponent;
  let fixture: ComponentFixture<ModificarCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarCardapioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
