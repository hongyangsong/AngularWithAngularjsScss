import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken  } from '@angular/core';
import { UpgradeModule, downgradeComponent  } from '@angular/upgrade/static';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { phoneServiceProvider } from "./core/phone.service";
import { UrlHandlingStrategy } from '@angular/router';

declare var angular: any;

class CustomHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {

    console.log('url:', url.toString())
    const shouldProcess = url.toString().startsWith("/ng2-route") || url.toString().startsWith("/");
    console.log('CustomHandlingStradgy.shouldProcessUrl shouldProcess:', shouldProcess);
    return shouldProcess;
  }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}


angular.module('phonecatApp')
  .directive(
  'appHome',
  downgradeComponent({ component: HomeComponent })
);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule
  ],

  entryComponents: [HomeComponent],
  providers: [
    phoneServiceProvider,
    { provide: UrlHandlingStrategy, useClass: CustomHandlingStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
