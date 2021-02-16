import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationComponent } from './common/navigation/navigation.component';
import { HomeComponent } from './common/home/home.component';
import { HeroesComponent } from './common/heroes/heroes.component';

import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from './pipe/filter.pipe';

import { FormsModule } from '@angular/forms';



/* export const appRoutes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'heroes',
      component: HeroesComponent
  },
  {
      path: '**',
      component: HomeComponent,
  }
]; */

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    HeroesComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
//    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



