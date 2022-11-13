import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import {Routes, RouterModule} from '@angular/router';
 
import { AppComponent }   from './app.component';
import { AboutComponent }   from './components/about/about.component';
import { HomeComponent }   from './components/home/home.component';
import { NotfoundComponent }   from './components/notfound/notfound.component';
import { ItemComponent } from './components/item/item.component';
 
// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', component: NotfoundComponent }
];
 
@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent, HomeComponent, AboutComponent, NotfoundComponent, ItemComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }