import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material//dialog';
@Component({
  selector: 'app-uncheckeddialog',
  templateUrl: './uncheckeddialog.component.html',
  styleUrls: ['./uncheckeddialog.component.scss']
})
export class UncheckeddialogComponent implements OnInit {

  dialogresult = "yes";
  constructor(private dialogRef: MatDialogRef<UncheckeddialogComponent>) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close(this.dialogresult);
}

}