import { Injectable } from "@angular/core"

@Injectable({
    providedIn: "root",
})
export class CookieService {
    constructor() {}

    set(key: string, value: any, days: number) {
        const d = new Date()
        d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000)
        let expires = "expires=" + d.toUTCString()
        document.cookie = key + "=" + value + ";" + expires + ";path=/"
    }

    get(key: string) {
        let name = key + "="
        let decodedCookie = decodeURIComponent(document.cookie)
        let ca = decodedCookie.split(";")
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i]
            while (c.charAt(0) == " ") {
                c = c.substring(1)
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length)
            }
        }
        return null
    }

    delete(key: string) {
        this.set(key, "", -1)
    }
}
