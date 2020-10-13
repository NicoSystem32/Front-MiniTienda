import { Routes , RouterModule} from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { Route } from '@angular/compiler/src/core';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductoIndexComponent } from './components/productos/producto-index/producto-index.component';


const appRoute: Routes = [
    {path: '' , component: LoginComponent},
    {path: 'dashboard' , component:DashboardComponent},
    {path: 'productos' , component: ProductoIndexComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoute);
