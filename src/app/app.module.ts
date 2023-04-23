import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './module/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { CartpageComponent } from './cartpage/cartpage.component';
import { ItemComponent } from './item/item.component';
import { ErrorComponent } from './error/error.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';


import { ItemService } from './service/item/item.service'; // Add this import

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    CartpageComponent,
    ItemComponent,
    ErrorComponent,
    CheckoutComponent,
    LoginComponent,
    ErrorMessageComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyOtpComponent,
    UpdatePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,

    HttpClientModule,

    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard, ItemService],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
