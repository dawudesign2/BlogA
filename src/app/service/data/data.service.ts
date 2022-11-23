import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getCategories() {
    return this.http.get<Category>('http://localhost:8080/api/v1/categories');
  }

  createCategories(title: string) {
    return this.http.post<Category>('http://localhost:8080/api/v1/categories', { title });
  }

  deleteCategory(id: number) {
    return this.http.delete(`http://localhost:8080/api/v1/categories/${id}`);
  }
}
