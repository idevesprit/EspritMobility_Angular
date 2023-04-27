import { Component, OnInit } from '@angular/core';
import {UniversiteService} from "../../universite/service/universite.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  university:any
  constructor(private s:UniversiteService) { }

  ngOnInit(): void {
    this.s.getuniversite().subscribe(r=>{this.university=r})

  }

}
