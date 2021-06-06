import { IListaSeries } from './../models/ISeriesAPI.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  lingua = 'pt-BR';
  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=2815c32b6b21765c0dfb93cf86972bd0';
  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarSeries(busca: string): Observable<IListaSeries> {
    const url = `${this.apiURL}search/tv${this.key}&language=${this.lingua}&query=${busca}`;

    return this.http.get<IListaSeries>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }
  async exibirErro(erro: any) {
    const toast = await this.toastController.create({
      message: 'Erro ao consulta a API"',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
}
