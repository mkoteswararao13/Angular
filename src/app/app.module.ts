import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent, } from './grid/grid.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';
import { NgbdModalStacked } from './nested-modelpopup/nested-modelpopup.component';
import { WholeNumberDirective } from './whole-number.directive';
import { RouterModule, Routes } from '@angular/router';
import { ChkformComponent } from './chkform/chkform.component';

const appRoutes: Routes = [
  { path: '', component: GridComponent },
  {path: 'chkform', component: ChkformComponent }
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  //{ path: '**', component: PageNotFoundComponent }
];
//import{NgbdModal2Content} from './nested-modelpopup/nested-modelpopup.component'
//import { NgbdModalBasic } from './
@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    NgbdModalStacked,
    WholeNumberDirective,
    ChkformComponent
  ],
  imports: [
    BrowserModule,NgbModule.forRoot(),
    AppRoutingModule,HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  //entryComponents: [ NgbdModal2Content],
  bootstrap: [AppComponent]
})
export class AppModule { }
