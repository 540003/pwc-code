import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users = [
    {
      "Name" : "Rahul",
      "Address" : "Hyderabad",
      "Occupation" : "Government",
      "Date Of Birth" :"2021-09-24"
    },
    {
      "Name" : "Rahul",
      "Address" : "Hyderabad",
      "Occupation" : "Salaried",
      "Date Of Birth" : "2021-09-24"
    },
    {
      "Name" : "Rahul",
      "Address" : "Hyderabad",
      "Occupation" : "Government",
      "Date Of Birth" : "2021-09-24"
    },
    {
      "Name" : "Rahul",
      "Address" : "Mumbai",
      "Occupation" : "Salaried",
      "Date Of Birth" : "2021-09-24"
    },
    {
      "Name" : "Rahul",
      "Address" : "Banglore",
      "Occupation" : "Others",
      "Date Of Birth" : "2021-09-24"
    },
    {
      "Name" : "Rahul",
      "Address" : "Delhi",
      "Occupation" : "Government",
      "Date Of Birth" : "2021-09-24"
    },
  ]
  constructor(private http: HttpClient) { }

  createUser(param: any) {
            this.users.push(param);  
  }
  getUserlist(){
    return this.users
  }
  /* 
   below code is commneted as the get api is not giving expected response.All the four apis(
  /posts/1/comments
  /albums/1/photos
  /users/1/albums
  /users/1/todos
  /users/1/posts)
  are not giving expected response 

    fetchUser(){
      let url ="https://jsonplaceholder.typicode.com/posts";
      return this.http.get(url);
    }
  */
}
