import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importando os componentes
import { HomeComponent } from './components/home/home.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { MegaSaltoComponent } from './components/mega-salto/mega-salto.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { CompServiceComponent } from './components/comp-service/comp-service.component';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'propbinding', component: PropertyBindingComponent},
  {path: 'eventbinding', component: EventBindingComponent},
  {path: 'two-way',component: TwoWayComponent},
  {path: 'mega-salto', component: MegaSaltoComponent},
  {path: 'ng-if', component: NgIfComponent},
  {path: 'ng-for', component: NgForComponent},
  {path: 'comp-service', component: CompServiceComponent}  
  
]; //Endereços dos componentes dentro do array

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
