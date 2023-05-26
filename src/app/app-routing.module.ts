import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogHomeComponent } from './pages/blog-home/blog-home.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';

const routes: Routes = [
  {
    path:'',
    component:BlogHomeComponent
  },
  {
    path:'post/:id',
    component:BlogPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
