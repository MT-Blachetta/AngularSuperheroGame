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

  constructor(private router: ActivatedRoute, private supService: SuperhumanService, fb: FormBuilder, private wService: WeaponService) {
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
      weaponId:["1"],
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

  decreaseValue(bid: string) {

    switch(bid) {
      case "power":
        let power: number = Number(this.supForm.get('power'));
        power = Math.max(power-1,0);
        this.supForm.patchValue({power: power});
        break;
      case "strength":
        let strength: number = Number(this.supForm.get('strength'));
        strength = Math.max(strength-1,0);
        this.supForm.patchValue({strength: strength}); 
        break;
      case "intelligence":
        let intelligence: number = Number(this.supForm.get('intelligence'));
        intelligence = Math.max(intelligence-1,0);
        this.supForm.patchValue({intelligence: intelligence});
        break;
      case "healthMax":
        let healthMax: number = Number(this.supForm.get('healthMax'));
        healthMax = Math.max(healthMax-1,0);
        this.supForm.patchValue({healthMax: healthMax});        
        break;
      case "shieldMax":
        let shieldMax: number = Number(this.supForm.get('shieldMax'));
        shieldMax = Math.max(shieldMax-1,0);
        this.supForm.patchValue({shieldMax: shieldMax});
        break;
      case "currentDamage":
        let currentDamage: number = Number(this.supForm.get('power'));
        currentDamage = Math.max(currentDamage-1,0);
        this.supForm.patchValue({currentDamage: currentDamage});
        break;
      default:
        console.error("change of value failed");

    }

  }

  increaseValue(bid: string) {
    
    switch(bid) {
      case "power":
        let power: number = Number(this.supForm.get('power'));
        power = power+1;
        this.supForm.patchValue({power: power});
        break;
      case "strength":
        let strength: number = Number(this.supForm.get('strength'));
        strength = strength+1;
        this.supForm.patchValue({strength: strength}); 
        break;
      case "intelligence":
        let intelligence: number = Number(this.supForm.get('intelligence'));
        intelligence = intelligence+1;
        this.supForm.patchValue({intelligence: intelligence});
        break;
      case "healthMax":
        let healthMax: number = Number(this.supForm.get('healthMax'));
        healthMax = healthMax+1;
        this.supForm.patchValue({healthMax: healthMax});        
        break;
      case "shieldMax":
        let shieldMax: number = Number(this.supForm.get('shieldMax'));
        shieldMax = shieldMax+1;
        this.supForm.patchValue({shieldMax: shieldMax});
        break;
      case "currentDamage":
        let currentDamage: number = Number(this.supForm.get('power'));
        currentDamage = currentDamage+1;
        this.supForm.patchValue({currentDamage: currentDamage});
        break;
      default:
        console.error("change of value failed");

    }

  }

}
