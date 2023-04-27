import { Component, OnInit } from '@angular/core';
import {OffreService} from "../../offre/offre.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UniversiteService} from "../service/universite.service";

@Component({
  selector: 'app-our-offre',
  templateUrl: './our-offre.component.html',
  styleUrls: ['./our-offre.component.css']
})
export class OurOffreComponent implements OnInit {
  id:any
  offre:any
  search=null;
  searchtext: any;
  constructor(private s:UniversiteService,private ac:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {


      this.s.getOffrebyuniversite().subscribe(r=>{this.offre=r})

    }


}
