import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProcessResponse } from '../../models/model';

@Component({
  selector: 'galaxy-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() items: ProcessResponse[] = [];

  trackStatus(index: number, item: ProcessResponse): string {
    return item.status;
  }
}
