import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {TimelineItem} from '../timeline/timeline-item';

@Component({
  selector: 'app-dialog',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    MatDialogTitle
  ],
  templateUrl: './dialog.html',
  styleUrl: './dialog.sass',
})
export class Dialog {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: TimelineItem
  ) {}
}
