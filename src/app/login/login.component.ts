import Swal from 'sweetalert2/dist/sweetalert2.js';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostsServie } from '../post.service';
import { post } from '../signup/post.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isExist = false;
  responeData : post ;
  loadedPosts : post [] = [];
  isFetching = false;
  constructor(private http: HttpClient , 
              private postsService : PostsServie) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
        console.log(this.loadedPosts);

  }


  onLogin(postData : post){
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
      console.log(this.loadedPosts);
      console.log(postData.username)
      for(const users in posts){
        if(postData.username === posts[users].username){
          if(postData.password === posts[users].password){
            Swal.fire({
              title: 'Loging Success!',
              text: 'your email is ' + posts[users].email,
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            this.isExist = true;
            this.responeData = posts[users];
            break;
          } 
          else { 
            Swal.fire({
              title: 'Wrong password',
              text: 'Incorrect Password',
              icon: 'error',
              confirmButtonText: 'Retry'
            })
            break;
          }
        }
      }
      if(!this.isExist){
        Swal.fire({
          title: 'No User Found',
          text: 'Incorrect username  or Password',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    });
  }
}
