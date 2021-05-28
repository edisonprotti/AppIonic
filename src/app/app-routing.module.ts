import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'mortal-combate',
    loadChildren: () => import('./filmes/mortal-combate/mortal-combate.module').then( m => m.MortalCombatePageModule)
  },
  {
    path: 'liga-justica',
    loadChildren: () => import('./filmes/liga-justica/liga-justica.module').then( m => m.LigaJusticaPageModule)
  },
  {
    path: 'anonimo',
    loadChildren: () => import('./filmes/anonimo/anonimo.module').then( m => m.AnonimoPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  },
  {
    path: 'godzilla',
    loadChildren: () => import('./filmes/godzilla/godzilla.module').then( m => m.GodzillaPageModule)
  },
  {
    path: 'na-mira-do-perigo',
    loadChildren: () => import('./filmes/na-mira-do-perigo/na-mira-do-perigo.module').then( m => m.NaMiraDoPerigoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
