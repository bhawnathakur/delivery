import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material//dialog';
@Component({
  selector: 'app-checkeddialog',
  templateUrl: './checkeddialog.component.html',
  styleUrls: ['./checkeddialog.component.scss']
})
export class CheckeddialogComponent implements OnInit {

  dialogresult = "yes";
  constructor(private dialogRef: MatDialogRef<CheckeddialogComponent>) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close(this.dialogresult);
}

}