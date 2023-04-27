import { Component, OnInit } from '@angular/core';
import {UniversiteService} from "../../universite/service/universite.service";
import {Router} from "@angular/router";
import {EntretienService} from "../entretien.service";

@Component({
  selector: 'app-entretien',
  templateUrl: './entretien.component.html',
  styleUrls: ['./entretien.component.css']
})
export class EntretienComponent implements OnInit {

  constructor(private s:EntretienService,private router:Router) { }

  ngOnInit(): void {
  }
  addEntretien(f:any){
    this.s.addentretien(f).subscribe(
      ()=>{
        this.router.navigate(['candidature'])
        console.log(f)
      }


    )
 }

}
