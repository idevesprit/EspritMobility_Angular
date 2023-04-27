import { Component, OnInit } from '@angular/core';
import {UniversiteService} from "../../universite/service/universite.service";
import {ActivatedRoute, Router} from "@angular/router";
import {OffreService} from "../offre.service";

@Component({
  selector: 'app-deleteoffre',
  templateUrl: './deleteoffre.component.html',
  styleUrls: ['./deleteoffre.component.css']
})
export class DeleteoffreComponent implements OnInit {

  constructor(private s:OffreService,private ac:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.s.Delete_offre(this.ac.snapshot.params['id']).subscribe(
      ()=>
        this.router.navigate(['ouroffre'])
    )

  }

}
