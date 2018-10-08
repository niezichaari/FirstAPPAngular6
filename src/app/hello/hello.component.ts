import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  myvar ="testing biaaatch"
    i=0
    myDisabledValue = false
    //somevar = Math.random()
  constructor() { }
  doSomeHeavyTask(){
    
  }

  ngOnInit() {
    /*setInterval(()=>{
      this.somevar = Math.random()
    }, 50)*/
  }
  myCalledFunction(){
 this.i++
 console.log(`called ${this.i} times`);

 this.myDisabledValue= this.i%2 ? false : true
 console.log(this.myDisabledValue);
 console.log(`${this.myDisabledValue}`);

  }

}
