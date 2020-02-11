import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   clickcounter: number = 0;
   Name:string;
  constructor() { }

  ngOnInit() {
  }
  countClick() {
this.clickcounter += 1;
  }
  setclasses(){
    let myclasses={
      active: this.clickcounter > 4,
      notactive: this.clickcounter < 4
    }
    return myclasses;
  }
}
