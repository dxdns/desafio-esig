import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
      path: "auth",
      component: AuthLayoutComponent,
      children: [
          {
              path: "login",
              component: LoginComponent,
          },
          {
              path: "register",
              component: RegisterComponent,
          },
          {
              path: "",
              redirectTo: "login",
              pathMatch: "full",
          },
      ],
  },
  {
      path: "",
      component: MainLayoutComponent,
      canActivate: [AuthGuard],
      children: [
          {
              path: "",
              component: HomeComponent,
          },
      ],
  },
  {
      path: "**",
      component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
