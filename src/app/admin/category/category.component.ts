import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data/data.service';
import { Category } from 'src/app/models/category.model';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category | any;
  message: string | undefined;

  constructor(
    private service: DataService,
    public auth: AuthenticationService
    ) {}

  getCategories(): void {
    this.service.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  updateCategory(id: number): void {
    console.log(id);
  }

  deleteCategory(id: number): void {
    if (confirm('Are you sure you want to delete this category?')) {
      this.service.deleteCategory(id).subscribe(() => {
        this.getCategories();
      });

    } else {
      this.message = 'Category not deleted';  
    }
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
