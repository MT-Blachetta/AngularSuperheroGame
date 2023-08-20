import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Weapon } from '../interfaces/weapon'

@Injectable({
  providedIn: 'root'
})

export class WeaponService {

  private baseUrl: string = "http://localhost:8015/weapon";

  weapons: Weapon[] = [];

  constructor(private client: HttpClient) {

  
  }

  getWeapons(){
    return this.client.get<Weapon[]>(this.baseUrl+"/all");
  }

  postWeapon(sup: any) {   
    return this.client.post(this.baseUrl, sup);
   }

   setWeapons(weaponList: Weapon[]){
    this.weapons = weaponList;
   }

}
