import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { ComoFuncionaComponent } from './public/como-funciona/como-funciona.component';
import { LoginComponent } from './public/login/login.component';
import { CardapioComponent } from './public/cardapio/cardapio.component';
import { FooterComponent } from './public/footer/footer.component';
import { PrecosComponent } from './public/precos/precos.component';
import { RankingComponent } from './public/ranking/ranking.component';
import { FormReservaComponent } from './public/form-reserva/form-reserva.component';
import { CadastrarComponent } from './public/cadastrar/cadastrar.component';
import { FinalizarCompraComponent } from './public/finalizar-compra/finalizar-compra.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ModificarPrecosComponent } from './admin/modificar-precos/modificar-precos.component';
import { ModificarRankingComponent } from './admin/modificar-ranking/modificar-ranking.component';
import { VerificarReservasComponent } from './admin/verificar-reservas/verificar-reservas.component';
import { ModificarCardapioComponent } from './admin/modificar-cardapio/modificar-cardapio.component';
import { ModificarPistaComponent } from './admin/modificar-pista/modificar-pista.component';
import { UserLogadoComponent } from './public/user-logado/user-logado.component';
import { ModificarBloqueioComponent } from './admin/modificar-bloqueio/modificar-bloqueio.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "comoFunciona",
        component: ComoFuncionaComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "cardapio",
        component: CardapioComponent
    },
    {
        path: "footer",
        component: FooterComponent
    },
    {
        path: "precos",
        component: PrecosComponent
    },
    {
        path: "ranking",
        component: RankingComponent
    },
    {
        path: "formReserva",
        component: FormReservaComponent
    },
    {
        path: "cadastrar",
        component: CadastrarComponent
    },
    {
        path: "finalizarCompra",
        component: FinalizarCompraComponent
    },
    {
        path: "adminHome",
        component: AdminHomeComponent
    },
    {
        path: "modificarPrecos",
        component: ModificarPrecosComponent
    },
    {
        path: "modificarCardapio",
        component: ModificarCardapioComponent
    },
    {
        path: "modificarRanking",
        component: ModificarRankingComponent
    },
    {
        path: "modificarPista",
        component: ModificarPistaComponent
    },
    {
        path: "modificarBloqueio",
        component: ModificarBloqueioComponent
    },
    {
        path: "userLogado",
        component: UserLogadoComponent
    },
    {
        path: "verificarReservas",
        component: VerificarReservasComponent
    }
];
