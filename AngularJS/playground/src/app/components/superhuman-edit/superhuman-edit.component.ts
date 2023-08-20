import {Component} from '@angular/core';
import {Superhuman} from "../../interfaces/superhuman";
import {ActivatedRoute} from "@angular/router";
import {SuperhumanService} from "../../services/superhuman.service";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
  supForm: FormGroup;

  constructor(private router: ActivatedRoute, private supService: SuperhumanService, fb: FormBuilder) {
    let id: number = Number(this.router.snapshot.paramMap.get('id'));
    //this.sup = supService.getById(id);
    
    this.supForm = fb.group({
      name: ['', Validators.required],
      dead: [false],
      strength: [0],
      intelligence: [0],
      power: [3],
      healthMax: [0],
      shieldMax: [0],
      powerType: [this.powerTypes[0]],
      heroType: [this.heroTypes[0]],
      story: ['This is a sample story of your hero'],
      currentDamage: [0],
    });

  }

  onSubmit(){ 
    if(!this.submitted){
      this.submitted = true;
    }
    if(this.supForm.valid){
      console.log(this.supForm.getRawValue());
    }
    
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
