import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './components/login.component';
import { WelcomeComponent } from './components/welcome.component';
import {ProductComponent} from './components/product.component';
import { SaludoComponent } from './components/saludo.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'welcome/products', component: ProductComponent},
  {path: 'welcome/saludo', component: SaludoComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
