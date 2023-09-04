import { Component } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  featuredPosts:Array<any>;
  latestPosts:Array<any>;

  constructor(private postService:PostService){}

  ngOnInit(){
    this.postService.loadPost().subscribe(val=>{
      this.featuredPosts =val;
    })
    this.postService.loadLatesPost().subscribe(val=>{
      this.latestPosts=val;
    })
  }
}
