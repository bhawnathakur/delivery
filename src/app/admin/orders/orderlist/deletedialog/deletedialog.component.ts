import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material//dialog';
@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.scss']
})
export class DeletedialogComponent implements OnInit {

  dialogresult = "yes";
  constructor(    private dialogRef: MatDialogRef<DeletedialogComponent>) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close(this.dialogresult);
}

}