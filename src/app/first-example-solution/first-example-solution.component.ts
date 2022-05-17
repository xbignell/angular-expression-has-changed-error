import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-first-example-solution',
  templateUrl: './first-example-solution.component.html',
  styleUrls: ['./first-example-solution.component.css'],
})
export class FirstExampleSolutionComponent implements AfterViewInit {
  public loading = true;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.loading = false;
    this.changeDetector.detectChanges();
  }
}
