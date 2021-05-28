import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MortalCombatePageRoutingModule } from './mortal-combate-routing.module';

import { MortalCombatePage } from './mortal-combate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MortalCombatePageRoutingModule
  ],
  declarations: [MortalCombatePage]
})
export class MortalCombatePageModule {}
