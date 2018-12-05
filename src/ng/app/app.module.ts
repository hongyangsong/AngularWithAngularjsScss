import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UrlHandlingStrategy } from '@angular/router';

class CustomHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {

    console.log('url:', url.toString())
    const shouldProcess = url.toString().startsWith("/home") || url.toString().startsWith("/");
    console.log('CustomHandlingStradgy.shouldProcessUrl shouldProcess:', shouldProcess);
    return shouldProcess;
  }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

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
    { provide: UrlHandlingStrategy, useClass: CustomHandlingStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
