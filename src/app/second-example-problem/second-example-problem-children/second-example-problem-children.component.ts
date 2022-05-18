import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-example-problem-children',
  templateUrl: './second-example-problem-children.component.html',
  styleUrls: ['./second-example-problem-children.component.css'],
})
export class SecondExampleProblemChildrenComponent {
  @Input() value: string;
}
