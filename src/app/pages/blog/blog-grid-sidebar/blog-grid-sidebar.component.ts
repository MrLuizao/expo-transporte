import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";

import BlogData from '../../../data/blog/blog-grid.json'
import { BlogSidebarComponent } from "../../../components/blog/blog-sidebar/blog-sidebar.component";
import { FooterFiveComponent } from "../../../components/footer/footer-five/footer-five.component";
interface BlogData{
  id: number;
  image: string;
  category: string;
  title: string;
  desc: string;
  date: string;
}

@Component({
  selector: 'app-blog-grid-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    BlogSidebarComponent,
    FooterFiveComponent
],
  templateUrl: './blog-grid-sidebar.component.html',
  styleUrl: './blog-grid-sidebar.component.scss'
})

export class BlogGridSidebarComponent {
  blogData:BlogData[] = BlogData.slice(0,8)
}
