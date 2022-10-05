import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerAddComponent,
    CustomerViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
