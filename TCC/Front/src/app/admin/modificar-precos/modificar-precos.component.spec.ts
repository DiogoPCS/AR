import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPrecosComponent } from './modificar-precos.component';

describe('ModificarPrecosComponent', () => {
  let component: ModificarPrecosComponent;
  let fixture: ComponentFixture<ModificarPrecosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarPrecosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarPrecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
