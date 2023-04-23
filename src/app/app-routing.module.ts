import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartpageComponent } from './cartpage/cartpage.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ErrorComponent } from './error/error.component';
import { ItemComponent } from './item/item.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';


import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'search/:searchItem',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'cart-page',component:CartpageComponent},
  {path:'food/:id',component:ItemComponent},
  {path:'checkout',component:CheckoutComponent},

  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },

  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-otp', component: VerifyOtpComponent },
  { path: 'update-password', component: UpdatePasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
