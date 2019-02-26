import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './pages/body/body.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailComponent } from './pages/detail/detail.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';

const routes: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'busqueda/:cadena', component: BusquedaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
