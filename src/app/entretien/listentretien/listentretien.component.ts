import { Component, OnInit } from '@angular/core';
import {UniversiteService} from "../../universite/service/universite.service";
import {EntretienService} from "../entretien.service";

@Component({
  selector: 'app-listentretien',
  templateUrl: './listentretien.component.html',
  styleUrls: ['./listentretien.component.css']
})
export class ListentretienComponent implements OnInit {

  constructor(private s:EntretienService) { }
  entretien:any
  ngOnInit(): void {
    this.s.getEtretien().subscribe(r=>{this.entretien=r})


  }
  }
