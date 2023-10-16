import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class addPostService {
  private apiUrl = 'http://localhost:5000/addPost';

  constructor(private http: HttpClient) {}

  addPost(start: string, end: string): Observable<any> {
    const body = { start, end };
    return this.http.post(this.apiUrl, body);
  }
}
