import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { FooterFiveComponent } from "../../../components/footer/footer-five/footer-five.component";
import { BlogSidebarComponent } from "../../../components/blog/blog-sidebar/blog-sidebar.component";
import { BlogCommentsComponent } from "../../../components/blog/blog-comments/blog-comments.component";

@Component({
  selector: 'app-blog-vimeo-post',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterFiveComponent,
    BlogSidebarComponent,
    BlogCommentsComponent
],
  templateUrl: './blog-vimeo-post.component.html',
  styleUrl: './blog-vimeo-post.component.scss'
})
export class BlogVimeoPostComponent {

}
