import { Component, OnInit } from '@angular/core';
import {Post} from '../post.interface';
import {PostsService} from '../posts.service';
import {Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  posts: Post[];
  selectedPost: Post;

  destroy$ = new Subject<boolean>();

  constructor(private postsService: PostsService) {
    this.selectedPost = {
      title: '',
      content: '',
      author: '',
      publishDate: '',
      category: ''
    };
  }

  ngOnInit(): void {
    this.getContent();
  }

  onPostSubmit(post: Post): void {
    if (!post.id) {
      // create
      this.postsService.createPost({...post}).pipe(
        takeUntil(this.destroy$)
      ).subscribe(() => {
        this.getContent();
      }, (error) => {
        console.log(error);
      });

      return;
    }

    // update
    this.postsService.updatePost(post).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.getContent();
    }, (error) => {
      console.log(error);
    });
  }

  onPostSelect(post: Post): void {
    this.selectedPost = post;
  }

  onPostDelete(postId: number): void {
    this.postsService.deletePost(postId).pipe(
      takeUntil(this.destroy$)
    ).subscribe(_ => {
      this.getContent();
    }, (error) => {
      console.log(error);
    });
  }

  private getContent(): void {
    this.postsService.getPosts().pipe(
      map((stream) => {
        return stream.filter(x => x.category === 'modern');
      }),
      takeUntil(this.destroy$)
    ).subscribe((response) => {
      this.posts = response;
    }, (error) => {
      console.log(error);
    });
  }
}
