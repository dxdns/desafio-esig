import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { isDevMode } from "@angular/core"

@Injectable({
    providedIn: "root",
})
export class ApiService {
    private url = "http://localhost:8081"

    constructor(private http: HttpClient) {}

    login(email: string, password: string) {
        return this.http.post(`${this.url}/auth/login`, {
            email,
            password,
        })
    }

    register(body: any) {
        return this.http.post(`${this.url}/auth/register`, body)
    }
}
