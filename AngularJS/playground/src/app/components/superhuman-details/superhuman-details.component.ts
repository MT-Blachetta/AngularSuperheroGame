import { Component } from '@angular/core';
import {Superhuman} from "../../interfaces/superhuman";
import {ActivatedRoute, Router} from "@angular/router";
import {SuperhumanService} from "../../services/superhuman.service";
import { Weapon } from 'src/app/interfaces/weapon';

@Component({
  selector: 'app-superhuman-details',
  templateUrl: './superhuman-details.component.html',
  styleUrls: ['./superhuman-details.component.sass']
})
export class SuperhumanDetailsComponent {

  isView: boolean = true;
  selectedID: number = 0;

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

  equippedWeapon: Weapon =  {
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

  constructor(private navigator: Router, private router: ActivatedRoute, private supService: SuperhumanService) {
    let id: number = Number(this.router.snapshot.paramMap.get('id'));
    this.supService.editID = id; 
    this.selectedSuperhuman = supService.getById(id);
    this.selectedID = id;
    if(this.selectedSuperhuman.weapon !== undefined){ this.equippedWeapon = this.selectedSuperhuman.weapon; }
  }

  chooseHero() {
    sessionStorage.setItem("userHero",this.selectedSuperhuman.id.toString());
    //this.navigator.navigate(['']);
  }

}
