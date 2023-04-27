import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {universite} from "../../model/universite";
import {Candidature} from "../../model/Candidature";

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  constructor(private http: HttpClient) {
  }


  adduniversite(universite: any) {
//json-server db.json --watch
    return this.http.post('http://localhost:9090/universite/add ', universite)
  }
  getuniversite():Observable<universite[]>{
    return  this.http.get<universite[]>('http://localhost:9090/universite/getAll');


  }
  Delete_universite(id:any) {
    return this.http.delete('http://localhost:9090/universite/delete/'+id);
  }

  getuserbyid(id:any):Observable<universite>{
    return this.http.get<universite>('http://localhost:9090/universite/get/'+id);
  }

  Updateuniversite(universite: any) {
//json-server db.json --watch
    return this.http.put('http://localhost:9090/universite/update', universite)
  }

  getOffrebyuniversite():Observable<universite>{
    return this.http.get<universite>('http://localhost:9090/offre/getoffreUniveriste/2');
  }
  getcondidaturebyuniversite():Observable<Candidature>{
    return this.http.get<Candidature>('http://localhost:9090/candidature/getcondidaturebyuniversite/2');
  }


}
