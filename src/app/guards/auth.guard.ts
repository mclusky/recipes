import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, UrlSegment, Route } from '@angular/router';
import { Observable } from 'rxjs';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/ngrx/auth.reducers';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

    constructor(private store: Store<fromApp.AppState>) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.store
            .select('auth')
            .pipe(take(1))
            .pipe(map((authState: fromAuth.State) => authState.authenticated));
    }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return this.store
            .select('auth')
            .pipe(take(1))
            .pipe(map((authState: fromAuth.State) => {
                return authState.authenticated;
            }));
    }
}

