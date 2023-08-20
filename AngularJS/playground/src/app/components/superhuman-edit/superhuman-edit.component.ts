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

  public edit_id: number = 0;

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

  updateData(){ 
    if(!this.submitted){
      this.submitted = true;
    }
    console.log("Edit Component: Updated Data");
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
        let power: number = Number(this.updateForm.get('power'));
        power = Math.max(power-1,0);
        this.updateForm.patchValue({power: power});
        break;
      case "strength":
        let strength: number = Number(this.updateForm.get('strength'));
        strength = Math.max(strength-1,0);
        this.updateForm.patchValue({strength: strength}); 
        break;
      case "intelligence":
        let intelligence: number = Number(this.updateForm.get('intelligence'));
        intelligence = Math.max(intelligence-1,0);
        this.updateForm.patchValue({intelligence: intelligence});
        break;
      case "healthMax":
        let healthMax: number = Number(this.updateForm.get('healthMax'));
        healthMax = Math.max(healthMax-1,0);
        this.updateForm.patchValue({healthMax: healthMax});        
        break;
      case "shieldMax":
        let shieldMax: number = Number(this.updateForm.get('shieldMax'));
        shieldMax = Math.max(shieldMax-1,0);
        this.updateForm.patchValue({shieldMax: shieldMax});
        break;
      case "currentDamage":
        let currentDamage: number = Number(this.updateForm.get('power'));
        currentDamage = Math.max(currentDamage-1,0);
        this.updateForm.patchValue({currentDamage: currentDamage});
        break;
      default:
        console.error("change of value failed");

    }

  }

  increaseValue(bid: string) {
    
    switch(bid) {
      case "power":
        let power: number = Number(this.updateForm.get('power'));
        power = power+1;
        this.updateForm.patchValue({power: power});
        break;
      case "strength":
        let strength: number = Number(this.updateForm.get('strength'));
        strength = strength+1;
        this.updateForm.patchValue({strength: strength}); 
        break;
      case "intelligence":
        let intelligence: number = Number(this.updateForm.get('intelligence'));
        intelligence = intelligence+1;
        this.updateForm.patchValue({intelligence: intelligence});
        break;
      case "healthMax":
        let healthMax: number = Number(this.updateForm.get('healthMax'));
        healthMax = healthMax+1;
        this.updateForm.patchValue({healthMax: healthMax});        
        break;
      case "shieldMax":
        let shieldMax: number = Number(this.updateForm.get('shieldMax'));
        shieldMax = shieldMax+1;
        this.updateForm.patchValue({shieldMax: shieldMax});
        break;
      case "currentDamage":
        let currentDamage: number = Number(this.updateForm.get('power'));
        currentDamage = currentDamage+1;
        this.updateForm.patchValue({currentDamage: currentDamage});
        break;
      default:
        console.error("change of value failed");

    }

  }
  

}
