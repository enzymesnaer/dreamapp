import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExtypiService {

  constructor(public http: HttpClient) { }

  public URL = "https://jsonplaceholder.typicode.com/";

  fetchUsers() {
    return this.http.get(this.URL+'users');
  }
  fetchPosts() {
    return this.http.get(this.URL+'posts');
  }
  fetchComments() {
    return this.http.get(this.URL+'comments');
  }
}
