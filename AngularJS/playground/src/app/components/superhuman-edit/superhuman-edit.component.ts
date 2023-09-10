import {Component} from '@angular/core';
import {Superhuman, weapon} from "../../interfaces/superhuman";
//import {ActivatedRoute} from "@angular/router";
import {SuperhumanService} from "../../services/superhuman.service";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
//import { Input } from '@angular/core';
import { WeaponService } from 'src/app/services/weapon.service';
import { Weapon } from 'src/app/interfaces/weapon';
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
  weaponsExists: boolean = false;
  heroWeapon: Weapon = {
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

  weaponTypes: Weapon[] = [this.heroWeapon];

  //@Input() edit_id;

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

  formState: any = {
    strength: 0,
    intelligence: 0,
    power: 0,
    healthMax: 0,
    shieldMax: 0,
    currentDamage: 0, 
  };

  constructor(private router: Router, private supService: SuperhumanService, private weaponSer: WeaponService, fb: FormBuilder) {
    
    //console.log("ID is ",this.edit_id)
    this.sup = supService.getEdited();
    if(this.sup.weapon !== undefined) { this.heroWeapon = this.sup.weapon; }

    if(this.weaponSer.weapons.length > 0){ 
      this.weaponTypes = this.weaponSer.weapons;
      this.weaponsExists = true; }

    //Check if weapons is empty
    

    //this.sup = supService.getById(id);

    this.formState = {

      strength: Number(this.sup.strength),
      intelligence: Number(this.sup.intelligence),
      power: Number(this.sup.power),
      healthMax: Number(this.sup.healthMax),
      shieldMax: Number(this.sup.shieldMax),
      currentDamage: Number(this.sup.currentDamage),


    }
    
    this.updateForm = fb.group({
      name: [this.sup.name, Validators.required],
      dead: [this.sup.dead],
      strength: [this.formState.strength],
      intelligence: [this.formState.intelligence],
      power: [this.formState.power],
      healthMax: [this.formState.healthMax],
      shieldMax: [this.formState.shieldMax],
      powerType: [this.sup.powerType],
      heroType: [this.sup.heroType],
      story: [this.sup.story],
      currentDamage: [this.formState.currentDamage],
      weaponId: [this.heroWeapon.id]
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
        this.formState.power = Math.max(this.formState.power-1,0);
        this.updateForm.patchValue({power: this.formState.power});
        break;
      case "strength":
        this.formState.strength = Math.max(this.formState.strength-1,0);
        this.updateForm.patchValue({strength: this.formState.strength});
        break;
      case "intelligence":
        this.formState.intelligence = Math.max(this.formState.intelligence-1,0);
        this.updateForm.patchValue({intelligence: this.formState.intelligence});
        break;
      case "healthMax":
        this.formState.healthMax = Math.max(this.formState.healthMax-1,0);
        this.updateForm.patchValue({healthMax: this.formState.healthMax});       
        break;
      case "shieldMax":
        this.formState.shieldMax = Math.max(this.formState.shieldMax-1,0);
        this.updateForm.patchValue({shieldMax: this.formState.shieldMax});
        break;
      case "currentDamage":
        this.formState.currentDamage = Math.max(this.formState.currentDamage-1,0);
        this.updateForm.patchValue({currentDamage: this.formState.currentDamage});
        break;
      default:
        console.error("change of value failed");

    }

  }

  increaseValue(bid: string) {

    switch(bid) {
      case "power":
        this.formState.power = this.formState.power+1
        this.updateForm.patchValue({power: this.formState.power});
        break;
      case "strength":
        this.formState.strength = this.formState.strength+1
        this.updateForm.patchValue({strength: this.formState.strength});
        break;
      case "intelligence":
        this.formState.intelligence = this.formState.intelligence+1
        this.updateForm.patchValue({intelligence: this.formState.intelligence});
        break;
      case "healthMax":
        this.formState.healthMax = this.formState.healthMax+1
        this.updateForm.patchValue({healthMax: this.formState.healthMax});       
        break;
      case "shieldMax":
        this.formState.shieldMax = this.formState.shieldMax+1
        this.updateForm.patchValue({shieldMax: this.formState.shieldMax});
        break;
      case "currentDamage":
        this.formState.currentDamage = this.formState.currentDamage+1
        this.updateForm.patchValue({currentDamage: this.formState.currentDamage});
        break;
      default:
        console.error("change of value failed");

    }

  }
  

}
