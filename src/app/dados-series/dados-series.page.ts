import { ISeriesAPI } from './../models/ISeriesAPI.model';
import { Component, OnInit } from '@angular/core';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-dados-series',
  templateUrl: './dados-series.page.html',
  styleUrls: ['./dados-series.page.scss'],
})
export class DadosSeriesPage implements OnInit {

  series: ISeriesAPI;

  generos: string[] = [];

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.series = this.dadosService.pegarDados('series');
    this.generos = this.dadosService.pegarDados('generos');
    console.log('Series Enviado', this.series);
  }

}
