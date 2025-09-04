import { Component } from '@angular/core';
import { PrecosComponent } from '../precos/precos.component';
import { CardapioComponent } from '../cardapio/cardapio.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-home',
  imports: [PrecosComponent, CardapioComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
