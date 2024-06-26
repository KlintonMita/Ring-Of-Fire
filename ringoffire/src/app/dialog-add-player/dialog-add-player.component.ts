import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule,MatInputModule,MatButtonModule, FormsModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent implements OnInit {
  name: string = '';

  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }
}

