import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  standalone: true,
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  private categoryName?: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.categoryName = this.route.snapshot.paramMap.get('categoryName');
    console.log(this.categoryName);
  }
}
