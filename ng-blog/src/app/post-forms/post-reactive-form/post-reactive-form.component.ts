import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../post.interface';

@Component({
  selector: 'app-post-reactive-form',
  templateUrl: './post-reactive-form.component.html',
  styleUrls: ['./post-reactive-form.component.scss']
})
export class PostReactiveFormComponent implements OnInit {

  @Output() postSubmitted = new EventEmitter<Post>();

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      content: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    console.log(this.formGroup);

    const post: Post = {
      ...this.formGroup.value,
      author: 'Z. Strahinova',
      publishDate: 'Oct 23, 2020'
    };

    this.postSubmitted.emit(post);
  }
}
