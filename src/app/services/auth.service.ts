import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private router: Router) { }

	setToken(token: string) {
		localStorage.setItem('token', token);
	}

	getToken() {
		return localStorage.getItem('token');
	}

	isLoggedIn() {
		return this.getToken() !== null;
	}

	login(userInfo: { email: string, password: string }): Observable<string | boolean> {
		if (userInfo.email === 'admin@mail.com' && userInfo.password === 'Admin123!') {
			this.setToken('tokenValue');
			return of(true);
		}
		return throwError(() => new Error('Failed to login'));
	}

	logout() {
		localStorage.removeItem('token');
		this.router.navigate(['login']);
	}
}
