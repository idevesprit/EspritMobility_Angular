import { Component, OnInit } from '@angular/core';
import {UniversiteService} from "../service/universite.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {

  id:any
  candidature:any
  constructor(private s:UniversiteService,private ac:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {


    this.s.getcondidaturebyuniversite().subscribe(r=>{this.candidature=r})

  }

}
