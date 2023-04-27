import { Component, OnInit } from '@angular/core';
import {UniversiteService} from "../service/universite.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent implements OnInit {

  constructor(private s:UniversiteService,private router:Router) { }

  ngOnInit(): void {
  }
  addUniversite(f:any){
    this.s.adduniversite(f).subscribe(
      ()=>{
        this.router.navigate(['listuniversite'])
        console.log(f)
      }


    )
  }

}
