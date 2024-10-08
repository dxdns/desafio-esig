import { Injectable } from "@angular/core"
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
} from "@angular/common/http"
import { Observable, of, throwError } from "rxjs"
import { catchError } from "rxjs/operators"
import { Router } from "@angular/router"
import { AuthService } from "../services/auth.service"

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        if (err.status === 401 || err.status === 403) {
            this.authService.logout()
            this.router.navigateByUrl(`/auth/login`, { replaceUrl: true })
            return of(err.message)
        }
        return throwError(() => new Error(err.message))
    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const authReq = req.clone({
            headers: req.headers.set(
                "Authorization",
                this.authService.getToken() || ""
            ),
        })
        return next
            .handle(authReq)
            .pipe(
                catchError((error: HttpErrorResponse) =>
                    this.handleAuthError(error)
                )
            )
    }
}
