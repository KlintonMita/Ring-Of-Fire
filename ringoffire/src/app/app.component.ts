import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgStyle, MatButtonModule, 
    MatIconModule, MatInputModule, FormsModule,
    MatDialogModule, MatFormFieldModule, MatCardModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ringoffire';
}
