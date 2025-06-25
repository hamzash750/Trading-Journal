import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Trading Journal');

    this.meta.addTags([
      { name: 'description', content: 'Log and analyze your trades with this Angular trading journal.' },
      { name: 'keywords', content: 'trading journal, trade tracker, stock trading, ROI' },
      { name: 'author', content: 'Hamza Shafique' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]);
  }
}