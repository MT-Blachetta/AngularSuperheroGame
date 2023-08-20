import {Component} from '@angular/core';
import {Superhuman} from "../../interfaces/superhuman";
//import {ActivatedRoute} from "@angular/router";
import {SuperhumanService} from "../../services/superhuman.service";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
//import {}
//import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sup-edit',
  templateUrl: './superhuman-edit.component.html',
  styleUrls: ['./superhuman-edit.component.sass']
})

export class SuperhumanEditComponent {

  powerTypes = ['WARRIOR', 'WITCH', 'HEALER'];
  heroTypes = ["HERO","ANTI_HERO","NEUTRAL"];

  edit_id: number = 0;

  submitted: boolean = false;
  sup: Superhuman = {
    id: 1,
    name: 'Fabio',
    dead: false,     
    strength: 99, 
    intelligence: 99, 
    power: 99, 
    healthMax: 99, 
    shieldMax: 99, 
    powerType: "X", 
    heroType: "Y",
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
  updateForm: FormGroup;

  constructor(private router: Router, private supService: SuperhumanService, fb: FormBuilder) {
    

    this.sup = supService.getById(this.edit_id);
    //this.sup = supService.getById(id);
    
    this.updateForm = fb.group({
      name: [this.sup.name, Validators.required],
      dead: [this.sup.dead],
      strength: [this.sup.strength],
      intelligence: [this.sup.intelligence],
      power: [this.sup.power],
      healthMax: [this.sup.healthMax],
      shieldMax: [this.sup.shieldMax],
      powerType: [this.sup.powerType],
      heroType: [this.sup.heroType],
      story: [this.sup.story],
      currentDamage: [this.sup.currentDamage],
    });

  }

  onSubmit(){ 
    if(!this.submitted){
      this.submitted = true;
    }
    this.router.navigate(['/list']);
    
  }

  customValidator(control: FormControl): { [key: string]: boolean } | null {
    console.log(control.value);
    if (control.value !== undefined && control.value > 3){
      return null;
    }

    return {'customValue': true};

  }

  decreaseValue(bid: string) {

    switch(bid) {
      case "power":
        break;
      case "strength":
        break;
      case "intelligence":
        break;
      case "healthMax":
        break;
      case "shieldMax":
        break;
      case "currentDamage":
        break;
      default:
        console.error("change of value failed");

    }

  }

  increaseValue(bid: string) {

    switch(bid) {
      case "power":
        break;
      case "strength":
        break;
      case "intelligence":
        break;
      case "healthMax":
        break;
      case "shieldMax":
        break;
      case "currentDamage":
        break;
      default:
        console.error("change of value failed");

    }

  }
  

}
