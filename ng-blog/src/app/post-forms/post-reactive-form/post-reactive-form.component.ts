import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../post.interface';

@Component({
  selector: 'app-post-reactive-form',
  templateUrl: './post-reactive-form.component.html',
  styleUrls: ['./post-reactive-form.component.scss']
})
export class PostReactiveFormComponent implements OnInit, OnChanges {

  @Input() post: Post;

  @Output() postSubmitted = new EventEmitter<Post>();

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      id: this.post.id,
      title: [this.post.title, [Validators.required, Validators.minLength(5)]],
      content: [this.post.content, [Validators.required]]
    });
  }

  ngOnChanges(): void {
    if (this.formGroup) {
      this.formGroup.get('id').setValue(this.post.id);
      this.formGroup.get('title').setValue(this.post.title);
      this.formGroup.get('content').setValue(this.post.content);
    }
  }

  onSubmit(): void {
    console.log(this.formGroup);

    const post: Post = {
      ...this.formGroup.value,
      author: 'Z. Strahinova',
      publishDate: 'Oct 30, 2020',
      category: 'modern'
    };

    this.postSubmitted.emit(post);
  }
}
