import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { ApiService } from "src/app/shared/services/api.service"
import { AuthService } from "src/app/shared/services/auth.service"

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup

    constructor(
        private fb: FormBuilder,
        private apiService: ApiService,
        private authService: AuthService,
        private router: Router
    ) {
        this.loginForm = this.fb.group({
            email: ["", [Validators.required, Validators.email]],
            password: ["", [Validators.required]],
        })
    }

    ngOnInit() {
        this.authService.isLogged().subscribe({
            next: (logged) => {
                if (logged) {
                    this.router.navigate(["/"])
                }
            },
        })
    }

    onSubmit() {
        if (this.loginForm.valid) {
            const { email, password } = this.loginForm.value

            this.apiService.login(email, password).subscribe(
                (response: any) => {
                    console.log(response)
                    this.authService.login(response)
                },
                (error: Error) => {
                    console.error("Login failed", error.message)
                }
            )
        } else {
            console.error("form invalid")
        }
    }
}
