import { Component, OnInit } from '@angular/core';
import { Superhuman } from "../../interfaces/superhuman";
import { ActivatedRoute } from "@angular/router";
import { SuperhumanService } from "../../services/superhuman.service";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { WeaponService } from '../../services/weapon.service';
import { Weapon } from '../../interfaces/weapon';

@Component({
  selector: 'app-superhuman-post',
  templateUrl: './superhuman-post.component.html',
  styleUrls: ['./superhuman-post.component.sass']
})
export class SuperhumanPostComponent implements OnInit {

  powerTypes = ['WARRIOR', 'WITCH', 'HEALER'];
  heroTypes = ["HERO","ANTI_HERO","NEUTRAL"];
  weaponTypes: Weapon[] = [];

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
      name: "string",
      story: "string",
      addedStrength: 0,
      addedIntelligence: 0,
      addedPower: 0,
      addedHealth: 0,
      addedShield: 0,
      maxUses: 0
    } 
  };

  supForm: FormGroup;

  formState: any = {
    name: "default",
    dead: false,
    strength: 0,
    intelligence: 0,
    power: 0,
    healthMax: 0,
    shieldMax: 0,
    powerType: "WARRIOR",
    heroType: "HERO",
    story: "default Story",
    currentDamage: 0,
    weaponId: 1
  };

  constructor(private router: ActivatedRoute, private supService: SuperhumanService, fb: FormBuilder, private wService: WeaponService) {
    let id: number = Number(this.router.snapshot.paramMap.get('id'));
    //this.sup = supService.getById(id);
    
    this.supForm = fb.group({
      name: [this.formState.name, Validators.required],
      dead: [this.formState.dead],
      strength: [this.formState.strength],
      intelligence: [this.formState.intelligence],
      power: [this.formState.power],
      healthMax: [this.formState.healthMax],
      shieldMax: [this.formState.shieldMax],
      powerType: [this.formState.powerType],
      heroType: [this.formState.heroType],
      story: [this.formState.story],
      currentDamage: [this.formState.currentDamage],
      weaponId: [this.formState.id]
    });

  }

  ngOnInit(){
    this.wService.getWeapons().subscribe( weaponList => { this.weaponTypes = weaponList; })
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

  //noGodValidator(control: FormControl): { [key: string]: boolean } | null {

  //}

  testValue(){
    let check = this.supForm.get('power')?.value;
    console.log("Type: ",typeof check);
    console.log("Value: ",check);

  }

  decreaseValue(bid: string) {

    switch(bid) {
      case "power":
        this.formState.power = Math.max(this.formState.power-1,0);
        this.supForm.patchValue({power: this.formState.power});
        break;
      case "strength":
        this.formState.strength = Math.max(this.formState.strength-1,0);
        this.supForm.patchValue({strength: this.formState.strength});
        break;
      case "intelligence":
        this.formState.intelligence = Math.max(this.formState.intelligence-1,0);
        this.supForm.patchValue({intelligence: this.formState.intelligence});
        break;
      case "healthMax":
        this.formState.healthMax = Math.max(this.formState.healthMax-1,0);
        this.supForm.patchValue({healthMax: this.formState.healthMax});       
        break;
      case "shieldMax":
        this.formState.shieldMax = Math.max(this.formState.shieldMax-1,0);
        this.supForm.patchValue({shieldMax: this.formState.shieldMax});
        break;
      case "currentDamage":
        this.formState.currentDamage = Math.max(this.formState.currentDamage-1,0);
        this.supForm.patchValue({currentDamage: this.formState.currentDamage});
        break;
      default:
        console.error("change of value failed");

    }

  }

  increaseValue(bid: string) {

    switch(bid) {
      case "power":
        this.formState.power = this.formState.power+1
        this.supForm.patchValue({power: this.formState.power});
        break;
      case "strength":
        this.formState.strength = this.formState.strength+1
        this.supForm.patchValue({strength: this.formState.strength});
        break;
      case "intelligence":
        this.formState.intelligence = this.formState.intelligence+1
        this.supForm.patchValue({intelligence: this.formState.intelligence});
        break;
      case "healthMax":
        this.formState.healthMax = this.formState.healthMax+1
        this.supForm.patchValue({healthMax: this.formState.healthMax});       
        break;
      case "shieldMax":
        this.formState.shieldMax = this.formState.shieldMax+1
        this.supForm.patchValue({shieldMax: this.formState.shieldMax});
        break;
      case "currentDamage":
        this.formState.currentDamage = this.formState.currentDamage+1
        this.supForm.patchValue({currentDamage: this.formState.currentDamage});
        break;
      default:
        console.error("change of value failed");

    }

  }

}
