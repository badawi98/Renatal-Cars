import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { PostsServie } from '../post.service';
import { post } from './post.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loadedPosts : post [] = [];
  isFetching = false;

  constructor(private http: HttpClient , 
              private postsService : PostsServie) { }

  ngOnInit(): void {
    
  }


  onCreatePost (postData : post){
    this.postsService.createAndStorePost(postData.name , postData.email , postData.birthdate , postData.Gender , postData.password , postData.rePassword , postData.username );
  }
  
}
