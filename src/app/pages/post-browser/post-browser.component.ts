import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GetAllService } from './get-all.service';

@Component({
  selector: 'app-post-browser',
  templateUrl: './post-browser.component.html',
  styleUrls: ['./post-browser.component.scss'],
})
export class PostBrowserComponent implements OnInit {
  constructor(private getAllService: GetAllService) {}

  term = '';

  postList: any = [];

  ngOnInit(): void {
    this.getAllService.getAllPosts().subscribe({
      next: (res: any) => {
        this.postList = res;
        console.log(this.postList);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  // modal code
}
