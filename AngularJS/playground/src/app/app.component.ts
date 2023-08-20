import { Component, OnInit } from '@angular/core';
import { WeaponService } from './services/weapon.service';
import { SuperhumanService } from './services/superhuman.service';
//import { Weapon } from './interfaces/weapon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  
  title = 'playground';

  initWeapon: any = {
    name: "none",
    story: "none",
    addedStrength: 0,
    addedIntelligence: 0,
    addedPower: 0,
    addedHealth: 0,
    addedShield: 0,
    maxUses: 0
  };
  

  constructor(private supService: SuperhumanService , private wS: WeaponService ){
  

  }

  ngOnInit(): void {

    let selectedHero = sessionStorage.getItem("userHero");
    //let itemList = []; 

    if(selectedHero){
       if(selectedHero !== "0"){
        this.supService.getSuperhumans().subscribe(slist => {
          //this.supService.setSuperhumans(slist); IF NEEDED
          let itemList: any[] = slist.map(sup => sup.id);
          if(!itemList.includes(selectedHero)){ sessionStorage.setItem("userHero","0"); }
        });
       }
    } else {
      sessionStorage.setItem("userHero","0");
    }

    
    this.wS.getWeapons().subscribe(weaponList => {
    
      let weaponState = weaponList;
  
      if(weaponState.length === 0) {
        this.wS.postWeapon(this.initWeapon).subscribe(weapon => {
          let latestWeapon: any = weapon;
          console.log("Successfully Created initial Weapon with id ",latestWeapon.id);
          // possible weaponList initialisation 
        });
      }
  
    });
  
  }

  
}
