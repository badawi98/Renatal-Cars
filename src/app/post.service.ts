import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { post } from './signup/post.model';

@Injectable({providedIn: 'root'})
export class PostsServie {

    constructor(private http : HttpClient){}

    createAndStorePost(name:string,
        email:string,
        birthdate: Date,
        Gender:string,
        password:String, 
        rePassword:string,
        username:string,) {
            const postData : post = {
                name:name,
                email:email,
                birthdate: birthdate,
                Gender:Gender,
                password:password, 
                rePassword:rePassword,
                username:username,};

            console.log(postData);
            this.http
            .post<{ name: string }>(
              'https://rental-cars-badawi.firebaseio.com/users.json',
              postData
              ).subscribe(responseData => {
                console.log(responseData);
              });
        }
    fetchPosts(){
        return this.http
            .get<{ [key:string]: post }>('https://rental-cars-badawi.firebaseio.com/users.json')
            .pipe(
                map(responseData  => {
                    const postsArray: post[] = [];
                    for(const key in responseData) { 
                        if(responseData.hasOwnProperty(key)){
                            postsArray.push({ ...responseData[key] , id:key})
                        }
                    }
                    return postsArray;
                    })
                );
            }
    }