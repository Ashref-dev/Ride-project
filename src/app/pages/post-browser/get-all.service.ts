import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class GetAllService {
  constructor(private http: HttpClient) {}
  getAllPosts() {
    let data = this.http.get<any>('http://localhost/ridephp/view.php');
    return data;
  }
}
