import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/ngrx/auth.reducers';
import { switchMap, take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private store: Store<fromApp.AppState>) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepted from auth', req);
        return this.store.select('auth')
            .pipe(take(1))
            .pipe(switchMap((authState: fromAuth.State) => {
                const copy = req.clone({
                    // headers: req.headers.append('', '')
                    params: req.params.set('auth', authState.token)
                });
                return next.handle(copy);
            }));
    }
}