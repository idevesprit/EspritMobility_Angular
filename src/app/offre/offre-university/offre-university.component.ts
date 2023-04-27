import { Component, OnInit } from '@angular/core';
import {OffreService} from "../offre.service";
import {UniversiteService} from "../../universite/service/universite.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-offre-university',
  templateUrl: './offre-university.component.html',
  styleUrls: ['./offre-university.component.css']
})
export class OffreUniversityComponent implements OnInit {
id:any
  offre:any
  constructor(private s:OffreService,private ac:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.s.getOffrebyuniversite(this.ac.snapshot.params['id']).subscribe(r=>{this.offre=r})

  }

}
