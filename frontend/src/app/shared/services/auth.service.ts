import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import { CookieService } from "./cookie.service"

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private logged = new BehaviorSubject<boolean>(false)
    private readonly TOKEN_KEY = "api-token"

    constructor(private cookieService: CookieService) {
        this.checkToken()
    }

    isLogged() {
        return this.logged.asObservable()
    }

    login() {
        this.logged.next(true)
    }

    logout() {
        this.logged.next(false)
        this.deleteToken()
    }

    private checkToken() {
        const token = this.getToken()
        if (token) {
            this.login()
        } else {
            this.logout()
        }
    }

    private getTokenKey() {
        return this.TOKEN_KEY
    }

    deleteToken() {
        this.cookieService.delete(this.getTokenKey())
    }

    getToken() {
        return this.cookieService.get(this.getTokenKey())
    }
}
