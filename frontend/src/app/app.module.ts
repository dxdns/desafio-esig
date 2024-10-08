import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"
import { ButtonComponent } from "./shared/components/button/button.component"
import { LoginComponent } from "./pages/login/login.component"
import { HomeComponent } from "./pages/home/home.component"
import { RegisterComponent } from "./pages/register/register.component"
import { NotFoundComponent } from "./pages/not-found/not-found.component"
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component"
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component"
import { LogoComponent } from "./shared/components/logo/logo.component"
import { ChartComponent } from "./shared/components/chart/chart.component"
import { AuthInterceptor } from "./shared/http-interceptors/auth.interceptor"
import { InputComponent } from "./shared/components/input/input.component"

@NgModule({
    declarations: [
        AppComponent,
        AuthLayoutComponent,
        MainLayoutComponent,
        LogoComponent,
        ButtonComponent,
        ChartComponent,
        LoginComponent,
        HomeComponent,
        RegisterComponent,
        NotFoundComponent,
        InputComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
