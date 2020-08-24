import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material//dialog';

@Component({
  selector: 'app-delivered-dialog',
  templateUrl: './delivered-dialog.component.html',
  styleUrls: ['./delivered-dialog.component.scss']
})
export class DeliveredDialogComponent implements OnInit {
  dialogresult = "yes";
  constructor(    private dialogRef: MatDialogRef<DeliveredDialogComponent>) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close(this.dialogresult);
}

}
