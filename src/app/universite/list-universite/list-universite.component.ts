import { Component, OnInit } from '@angular/core';
import {UniversiteService} from "../service/universite.service";

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.css']
})
export class ListUniversiteComponent implements OnInit {

  constructor(private s:UniversiteService) { }
  university:any
  ngOnInit(): void {
    this.s.getuniversite().subscribe(r=>{this.university=r})


  }

}
