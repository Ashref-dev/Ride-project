import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private apiUrl = 'http://localhost:5000/createUser';

  constructor(private http: HttpClient) {}

  signup(username: string, email: string, password: string): Observable<any> {
    const body = { username, email, password };
    return this.http.post(this.apiUrl, body);
  }
}
