import { Component } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent {
  categoryData:Array<any>;
  constructor(private categoryService:CategoryService){}
  ngOnInit(){
      this.categoryService.loadData().subscribe(val=>{
        this.categoryData = val;
      })
  }


}
