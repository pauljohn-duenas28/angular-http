import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from './post.model';
import { PostsService } from './post.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	
  loadedPosts: Post[] = [];
  isLoading = false;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
  	// this.fetchPosts();
  	this.isLoading = false;
  	this.postsService.fetchPost().subscribe(posts => {
  		this.isLoading = false;
  		this.loadedPosts = posts;
  	});
  }

  onCreatePost(postData: Post) {

    this.postsService.createPost(postData.title, postData.content);
   
  }

  onFetchPosts() {
    // Send Http request
    this.isLoading = false;
  	this.postsService.fetchPost().subscribe(posts => {
  		this.isLoading = false;
  		this.loadedPosts = posts;
  	});  }

  onClearPosts() {
    // Send Http request
  }

}
