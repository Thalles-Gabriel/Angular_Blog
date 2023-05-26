import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogHomeComponent } from './pages/blog-home/blog-home.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { CardPostsComponent } from './pages/shared/card-posts/card-posts.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    BlogHomeComponent,
    BlogPostComponent,
    CardPostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
