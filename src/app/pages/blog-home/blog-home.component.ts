import { Component, Input, OnInit } from '@angular/core';
import { PostsArray } from 'src/assets/text/postsArray';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {

  fakeContent:Array<any> = PostsArray

  constructor() { }

  ngOnInit(): void {
  }

}
