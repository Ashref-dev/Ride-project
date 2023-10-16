import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class loginService {
  constructor(private http: HttpClient) {}
  getAllUsers() {
    let data = this.http.get<any>('http://localhost/ridephp/login.php');
    return data;
  }
}
