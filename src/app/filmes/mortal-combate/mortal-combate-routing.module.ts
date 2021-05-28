import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MortalCombatePage } from './mortal-combate.page';

const routes: Routes = [
  {
    path: '',
    component: MortalCombatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MortalCombatePageRoutingModule {}
