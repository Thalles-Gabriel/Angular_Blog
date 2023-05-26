import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { CardContent, PostsArray } from 'src/assets/text/postsArray';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  faArrowRight = faArrowRight

  id: number = 0

  subs: Subscription = new Subscription()

  fakeData: Array<CardContent>

  fakeContent: CardContent

  constructor(private route: ActivatedRoute, private router: Router) {
    this.fakeData = PostsArray
    this.fakeContent = PostsArray[0]
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
  }

  ngOnInit(): void {
    this.subs = this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id')!)
    })

    this.fakeContent = PostsArray[this.id - 1]
  }

  ngOnDestroy(): void {
    if (this.subs) this.subs.unsubscribe()
  }

}
