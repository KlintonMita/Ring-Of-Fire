import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, NgStyle, PlayerComponent, MatButtonModule, MatIconModule,GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})

export class GameComponent {
  currentCard?: string;
  pickCardAnimation = false;
  game!: Game;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;
      console.log('new card:' + this.currentCard);
      console.log('game is', this.game);

      this.game.currentPlayer = this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      setTimeout(() => {
        this.game.playedCard.push(this.currentCard!);
        this.pickCardAnimation = false;
      }, 1000); 
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
  
    dialogRef.afterClosed().subscribe((name: string) => {
      if(name && name.length > 0) {
        this.game.players.push(name);
      }
    });
  }
}





