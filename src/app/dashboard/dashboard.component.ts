import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProcessResponse } from './models/model';
import { DashboardService } from './services';

@Component({
  selector: 'galaxy-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  items: ProcessResponse[] = [];
  constructor(private readonly service: DashboardService) {}

  send() {
    this.service
      .process()
      .subscribe((result) => (this.items = [...this.items, result]));
  }
}
