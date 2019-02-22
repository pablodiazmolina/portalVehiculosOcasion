import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './pages/body/body.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './pages/details/details.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'itemDetail', component: DetailsComponent },
  { path: 'detail', component: DetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
