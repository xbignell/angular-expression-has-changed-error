import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-example-problem',
  templateUrl: './first-example-problem.component.html',
  styleUrls: ['./first-example-problem.component.css'],
})
export class FirstExampleProblemComponent implements OnInit, AfterViewInit {
  public statusChange: boolean;

  ngOnInit() {
    this.statusChange = true;
  }

  ngAfterViewInit() {
    this.statusChange = false;
  }
}
