import {Component, OnInit} from '@angular/core';
import {Superhuman} from "../../interfaces/superhuman";
import {SuperhumanService} from "../../services/superhuman.service";
//import { DeadPipe } from './dead.pipe';

@Component({
  selector: 'app-sup-list',
  templateUrl: './superhuman-list.component.html',
  styleUrls: ['./superhuman-list.component.sass']
})
export class SuperhumanListComponent implements OnInit {

  superhumans: Superhuman[] = []

  constructor(private supService: SuperhumanService) {
  
  }

  ngOnInit(): void {
    this.supService.getSuperhumans().subscribe(slist => {
      //this.superhumans = slist;
      this.supService.setSuperhumans(slist);
      this.superhumans = this.supService.superhumans;
    });
  }
  

}




