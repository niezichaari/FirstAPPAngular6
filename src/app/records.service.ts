import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }
  getData(){
    return [
      {
       name :'malek',
       online: true
      },
      {
        name :'mouchmalek',
        online: false
       },
       {
        name :'ena',
        online: true
       },
       {
        name :'others',
        online: true
       }
      
    ]
  }
}
