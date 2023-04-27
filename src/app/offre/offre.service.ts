import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {universite} from "../model/universite";
import {HttpClient} from "@angular/common/http";
import {offre} from "../model/offre";

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http: HttpClient) {}

  getOffrebyuniversite(id:any):Observable<universite>{
    return this.http.get<universite>('http://localhost:9090/offre/getoffreUniveriste/'+id);
  }

  Delete_offre(id:any) {
    return this.http.delete('http://localhost:9090/offre/delete/'+id);
  }
  addoffre(offre: any) {
//json-server db.json --watch
    return this.http.post('http://localhost:9090/offre/add/2 ', offre)
  }
}
