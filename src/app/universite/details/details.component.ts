import { Component, OnInit } from '@angular/core';
import {UniversiteService} from "../service/universite.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:any;
  ud:any
  university:any

  constructor(private s:UniversiteService,private ac:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.s.getuserbyid(this.ac.snapshot.params['id']).subscribe(r=>{this.university=r})
  }


}
