import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../post.interface';
import {PostsService} from '../posts.service';
import {Observable, Subject, Subscription} from 'rxjs';
import {map, take, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit, OnDestroy {

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

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onPostSubmit(post: Post): void {
    if (!post.id) {
      // create
      const newPost = {
        ...post,
        author: 'Z. Strahinova',
        publishDate: 'Oct 30, 2020',
        category: 'ancient'
      };

      this.postsService.createPost(newPost).pipe(
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
    ).subscribe(() => {
      this.getContent();
    }, (error) => {
      console.log(error);
    });
  }

  private getContent(): void {
    this.postsService.getPosts().pipe(
      map((stream) => {
        return stream.filter(x => x.category === 'ancient');
      }),
      takeUntil(this.destroy$)
    ).subscribe((response) => {
      this.posts = response;
    }, (error) => {
      console.log(error);
    });
  }
}
