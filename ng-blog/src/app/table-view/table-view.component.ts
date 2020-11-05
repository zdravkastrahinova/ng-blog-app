import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Post} from '../post.interface';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent {

  @Input() posts: Post[];

  @Output() postSelected = new EventEmitter<Post>();
  @Output() postDeleted = new EventEmitter<number>();

  constructor() {
  }

  onEdit(id: number): void {
    const post = this.posts.find(p => p.id === id);

    this.postSelected.emit({
      ...post
    });
  }
}
