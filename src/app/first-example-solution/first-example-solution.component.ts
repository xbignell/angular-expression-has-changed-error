import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-example-solution',
  templateUrl: './first-example-solution.component.html',
  styleUrls: ['./first-example-solution.component.css'],
})
export class FirstExampleSolutionComponent implements OnInit {
  public statusChange: boolean;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    this.statusChange = true;
  }

  ngAfterViewInit() {
    this.statusChange = false;
    this.changeDetector.detectChanges();
  }
}
