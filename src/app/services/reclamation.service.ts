import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reclamation} from "../model/reclamation";


@Injectable({
  providedIn: 'root'
})
export class ReclamationaService {
  private host = environment.apiUrl;

  constructor(private http: HttpClient) {}


  public getReclamation(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.host}/reclamation/retrieve-all-Reclamation`);
  }

  public addReclamation(ra : Reclamation): Observable<Reclamation> {
    return this.http.post<Reclamation>(`${this.host}/reclamation/add-Reclamation`,ra);
  }

  public updateReclamation(ra : Reclamation): Observable<Reclamation> {
    return this.http.put<Reclamation>(`${this.host}/reclamation/update-Reclamation`,ra);
  }

  public deleteReclamation(id : string): Observable<void> {
    return this.http.delete<void>(`${this.host}/reclamation/remove-Reclamation/${id}`);
  }

}
