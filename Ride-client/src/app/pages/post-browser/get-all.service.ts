import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class GetAllService {
  constructor(private http: HttpClient) {}
  getAllPosts() {
    let data = this.http.get('http://127.0.0.1:8000/getAll',{ responseType: 'text' });
    return data;
  }
}
