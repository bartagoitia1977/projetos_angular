import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms' //para funcionar o two-way binding

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//os componentes sendo adicionados aqui
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { SecundarioComponent } from './components/secundario/secundario.component';
import { MegaSaltoComponent } from './components/mega-salto/mega-salto.component';
import { OutputComponent } from './components/output/output.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { HomeComponent } from './components/home/home.component';
import { CompServiceComponent } from './components/comp-service/comp-service.component';
import { ProductService } from './product.service';
import { LoggerService } from './logger.service';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayComponent,
    SecundarioComponent,
    MegaSaltoComponent,
    OutputComponent,
    NgIfComponent,
    NgForComponent,
    HomeComponent,
    CompServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //two way precisa estar no array de imports
  ],
  providers: [ProductService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
