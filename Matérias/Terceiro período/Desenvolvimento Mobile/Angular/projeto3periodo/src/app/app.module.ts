import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';

@NgModule({
	declarations: [AppComponent, HeaderComponent, FooterComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [provideClientHydration()],
	bootstrap: [AppComponent]
})
export class AppModule {}
