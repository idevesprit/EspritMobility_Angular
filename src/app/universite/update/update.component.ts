import { Component, OnInit } from '@angular/core';
import {UniversiteService} from "../service/universite.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  university:any
  constructor(private s:UniversiteService,private ac:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.s.getuserbyid(this.ac.snapshot.params['id']).subscribe(r=>{this.university=r})

  }

  UpdateUniversite(f:any){
    this.s.Updateuniversite(f).subscribe(
      ()=>{
        this.router.navigate(['listuniversite'])
        console.log(f)
      }


    )
  }


}
