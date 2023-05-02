import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Exchange, Rate} from "../model/exchange";

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  public host = 'http://api.nbp.pl/api/exchangerates/tables/a/last/5/?format=json';

  constructor(private http: HttpClient) { }

  getExchanges() {
    return this.http.get<Exchange[]>(this.host);
  }
  getRates() {
    return this.http.get<Rate[]>(this.host);
  }
}
