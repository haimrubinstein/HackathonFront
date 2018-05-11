import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {AppComponent} from './app.component';
import {TestComponent} from './components/test/test.component';
import {Web3Service} from "./services/web3Service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {AppRoutingModule} from './app-routing.module';
import {LogInComponent} from './components/log-in/log-in.component';

import {MyAccountComponent} from './components/my-account/my-account.component';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {AboutUsComponent} from './components/about-us/about-us.component';
import {PageNotFountComponent} from "./components/page-not-fount/page-not-fount.component";
import { DashboardMainPageComponent } from './components/dashboard/dashboard-main-page/dashboard-main-page.component';
import {SidebarModule} from "ng-sidebar";


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavigationBarComponent,
    LogInComponent,
    PageNotFountComponent,
    MyAccountComponent,
    HomePageComponent,
    AboutUsComponent,
    DashboardMainPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserModule,
    FormsModule,
    SidebarModule.forRoot(),
    HttpClientModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [Web3Service],
  bootstrap: [AppComponent]
})
export class AppModule {
}


