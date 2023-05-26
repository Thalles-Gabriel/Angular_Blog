import { Component, Input, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { CardContent } from 'src/assets/text/postsArray';

@Component({
  selector: 'app-card-posts',
  templateUrl: './card-posts.component.html',
  styleUrls: ['./card-posts.component.css']
})
export class CardPostsComponent implements OnInit {
  @Input() postContent:CardContent = {
    title: '',
    createdAt:'',
    imageUrl:'',
    content:''
 }

  faArrow = faExternalLinkAlt

  @Input() index:number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
