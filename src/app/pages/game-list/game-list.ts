import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.html',
  styleUrl: './game-list.css',
    standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
})
export class GameList {

}
