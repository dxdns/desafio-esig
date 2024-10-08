import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { isDevMode } from "@angular/core"

@Injectable({
    providedIn: "root",
})
export class ApiService {
    private url = isDevMode() ? "/api" : ""

    constructor(private http: HttpClient) {}

    login(email: string, password: string) {
        return this.http.post(`${this.url}/v1/user/signin`, {
            email,
            password,
        })
    }

    register(body: any) {
        return this.http.post(`${this.url}/v1/user`, body)
    }

    company() {
        return this.http.get(`${this.url}/v1/company`)
    }
}
