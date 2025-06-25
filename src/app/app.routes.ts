import { Routes } from '@angular/router';
import { GameList } from './pages/game-list/game-list';
import { Journal } from './pages/journal/journal';
import { Summary } from './pages/summary/summary';
import { Settings } from './pages/settings/settings';

export const routes: Routes = [
  { path: '', component: GameList },
  { path: 'journal', component: Journal },
  { path: 'summary', component: Summary },
  { path: 'settings', component: Settings },
  { path: '**', redirectTo: '' },
];
