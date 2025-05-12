import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {jwtDecode} from "jwt-decode";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080';
  private http = inject(HttpClient);
  private router = inject(Router);


  login(email: string, password: string): Observable<string> {
    return this.http
      .post(`${this.apiUrl}/auth/login`, { email, password }, { responseType: 'text' })
      .pipe(
        tap((token) => {
          this.saveToken(token);
        })
      );
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  verifyToken(): void {
    const token = this.getToken();
    if (!token) return;

    try {
      const decodedToken: any = jwtDecode(token);
      const expiryDate = new Date(decodedToken.exp * 1000);
      if (expiryDate < new Date()) {
        this.clearToken();
      }
    } catch {
      this.clearToken();
    }
  }

  clearToken(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;
    try {
      const decodedToken: any = jwtDecode(token);
      const expiryDate = new Date(decodedToken.exp * 1000);
      if (expiryDate < new Date()) {
        this.clearToken();
        return false;
      }
      return true;
    } catch {
      this.clearToken();
      return false;
    }
  }
  getUserRoles(): Object[] | null {
    const token = this.getToken();
    if (!token) return null;
    try {
      const decodedToken: any = jwtDecode(token);

      return decodedToken.roles || null;
    } catch {
      return null;
    }
  }
  getUserRole(): string[] | null {
    const token = this.getToken();
    if (!token) return null;
    try {
      const decodedToken: any = jwtDecode(token);

      return decodedToken.roles || null;
    } catch {
      return null;
    }
  }
  redirectAccordingToRole() {
    const roles = this.getUserRole();
    if(roles && roles.includes('ROLE_ADMIN')) {
      this.router.navigate(['/admin']);
    }
    if (roles && roles.includes('ROLE_USER')) {
      this.router.navigate(['/profile']);
    }
  }
}
