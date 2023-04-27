import { Component, OnInit } from '@angular/core';
import {UniversiteService} from "../../universite/service/universite.service";
import {Router} from "@angular/router";
import {OffreService} from "../offre.service";

@Component({
  selector: 'app-addeoffre',
  templateUrl: './addeoffre.component.html',
  styleUrls: ['./addeoffre.component.css']
})
export class AddeoffreComponent implements OnInit {

  constructor(private s:OffreService,private router:Router) { }
  currentDate = new Date();

  ngOnInit(): void {
  }
  addUniversite(f:any){
    this.s.addoffre(f).subscribe(
      ()=>{
        this.router.navigate(['ouroffre'])
        console.log(f)
      }


    )
  }

}
