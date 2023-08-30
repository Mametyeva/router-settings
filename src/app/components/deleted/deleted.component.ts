import { Component } from '@angular/core';
import { deletedTasks } from 'src/app/data/tasks';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.scss']
})
export class DeletedComponent {
  items = deletedTasks;

  checkList(): boolean {
    if (this.items.length < 1) {
      return true
    } else {
      return false
    }
  }
}
