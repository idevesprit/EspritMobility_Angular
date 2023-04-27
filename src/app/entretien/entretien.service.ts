import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {universite} from "../model/universite";
import {entretien} from "../model/entretien";

@Injectable({
  providedIn: 'root'
})
export class EntretienService {

  constructor(private http: HttpClient)  { }

  addentretien(entretien: any) {
//json-server db.json --watch
    return this.http.post('http://localhost:9090/entretien/add/2/1', entretien)
  }

  getEtretien():Observable<entretien[]>{
    return  this.http.get<entretien[]>('http://localhost:9090/entretien/getAll');


  }
}
