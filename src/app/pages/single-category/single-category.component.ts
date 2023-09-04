import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent {

  categoryPost:Array<any>;
  categoryName:string;

  constructor(private route:ActivatedRoute,private postService:PostService){

  }

  ngOnInit(){
    this.route.params.subscribe(res=>{
      this.postService.loadSingleCategoryPost(res['id']).subscribe(val=>{
        this.categoryPost = val;
      })
      this.categoryName=res['name']
      
    })
      
  }
}
