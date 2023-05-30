import { addPostService } from './add-post.servie';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent {
  constructor(private addPostService: addPostService) {}
  start!: string;
  end!: string;

  signSubmit() {
    console.log(this.start);

    this.addPostService.addPost(this.start, this.end).subscribe(
      (response) => {
        // Handle successful signup response
        console.log('add successful!', response);
        alert('add successful!');
      },
      (error) => {
        // Handle signup error
        console.error('add failed!', error);
        alert('add failed try again!');
      }
    );
  }
}
