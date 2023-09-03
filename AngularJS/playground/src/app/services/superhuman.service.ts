import {Injectable} from '@angular/core';
import {Superhuman} from "../interfaces/superhuman";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SuperhumanService {

  superhumans: Superhuman[] = [];
  notFetched: boolean = true;
  editID: number = 0;

  private baseUrl: string = "http://localhost:8015/superhuman";

  constructor(private client: HttpClient) {
    //this.client.get<Superhuman[]>(this.baseUrl+"/all").subscribe(slist => { this.superhumans = slist; } );  
  }

  getSuperhumans() {
    return this.client.get<Superhuman[]>(this.baseUrl+"/all");
  }

  postSuperhuman(sup: any) {   
   return this.client.post(this.baseUrl, sup);
  }

  setSuperhumans(supHuman: Superhuman[]) {
     this.superhumans = supHuman;
  }

  getById(id: number): Superhuman {
    return this.superhumans.filter(sup => sup.id === id)[0];
  }

  getEdited(): Superhuman{
    return this.getById(this.editID);
  }

  updateSuperhuman(){
    
  }

}
