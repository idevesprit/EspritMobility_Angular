import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UniversiteService} from "../service/universite.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id:any
  constructor(private s:UniversiteService,private ac:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.s.Delete_universite(this.ac.snapshot.params['id']).subscribe(
      ()=>
        this.router.navigate(['listuniversite'])

    )
  }


}
