import { Component } from '@angular/core';
import {Superhuman} from "../../interfaces/superhuman";
import {ActivatedRoute} from "@angular/router";
import {SuperhumanService} from "../../services/superhuman.service";

@Component({
  selector: 'app-superhuman-details',
  templateUrl: './superhuman-details.component.html',
  styleUrls: ['./superhuman-details.component.sass']
})
export class SuperhumanDetailsComponent {

  isView: boolean = false;

  selectedSuperhuman: Superhuman =  {
    id: 1,
    name: 'Fabio',
    dead: false,     
    strength: 99, 
    intelligence: 99, 
    power: 99, 
    healthMax: 99, 
    shieldMax: 99, 
    powerType: "WARRIOR", 
    heroType: "HERO",
    story: "intended as a dummy dataset",
    currentDamage: 0,
    weapon: {
      id: 1,
      name: "none",
      story: "none",
      addedStrength: 0,
      addedIntelligence: 0,
      addedPower: 0,
      addedHealth: 0,
      addedShield: 0,
      maxUses: 0
    } 
  };

  constructor(private router: ActivatedRoute, private supService: SuperhumanService) {
    let id: number = Number(this.router.snapshot.paramMap.get('id')); 
    this.selectedSuperhuman = supService.getById(id);
  }

}
