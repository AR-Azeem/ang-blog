import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {

  postData;
  similarPosts;

  constructor(private route:ActivatedRoute,private postService:PostService){}

  ngOnInit(){
    this.route.params.subscribe(data=>{
      console.log(data)
       this.postService.countViews(data['id'])
      this.postService.loadSinglePost(data['id']).subscribe(val=>{
        this.postData =val;
       
        this.loadSimilarPost(this.postData.category.categoryId)
        console.log(val)
      })

    })
  }

  loadSimilarPost(catId){
    this.postService.loadSimilarPost(catId).subscribe(res=>{
      this.similarPosts = res;
    })
  }
}
