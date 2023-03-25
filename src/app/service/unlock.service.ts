import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UnlockService {

  constructor(private http:HttpClient) { }

  unlockAcc(body:any){
    return this.http.post(`http://localhost:9090/unlock`,body,{responseType:'text'})
  }
}
