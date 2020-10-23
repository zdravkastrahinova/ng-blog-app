import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post.interface';

@Component({
  selector: 'app-card-list-view',
  templateUrl: './card-list-view.component.html',
  styleUrls: ['./card-list-view.component.scss']
})
export class CardListViewComponent {

  @Input() posts: Post[];

  selectedPost: Post;

  constructor() {
  }

  onPostSelected(post: Post): void {
    this.selectedPost = post;
  }
}
