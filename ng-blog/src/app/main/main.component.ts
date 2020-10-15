import {Component} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  numbers: number[];
  colors: string[];
  names: string[];

  stringInput: string;

  constructor() {
    this.numbers = [1, 2, 3, 4, 5];
    this.colors = ['red', 'green', 'blue'];
    this.names = ['John', 'Bill', 'James'];

    this.stringInput = '';
  }
}
