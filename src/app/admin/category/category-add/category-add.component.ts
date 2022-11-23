import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  constructor(
    private service: DataService,
    private router: Router
    ) { }

  category: string = '';
  submitted = false;
  message: string = '';

  addCategory() {
    if(this.category) {
       this.service.createCategories(this.category).subscribe();
       this.submitted = true;
       this.category = '';
       this.message = "Category added successfully";
       setTimeout(() => {
          this.router.navigate(['/admin/categories']);
        }, 2000);
    } else {
      alert('Please enter a category');
    }
  }

  ngOnInit(): void {
  }

}
