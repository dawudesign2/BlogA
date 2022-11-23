import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data/data.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service : DataService) { }

   categories: Category | any;

  getCategories(): void {
    this.service.getCategories().subscribe((data) => {
      this.categories = data;
    });

  }

  ngOnInit(): void {
    this.getCategories();
  }

}
