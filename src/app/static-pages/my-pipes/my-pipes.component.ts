import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pipes',
  templateUrl: './my-pipes.component.html',
  styleUrls: ['./my-pipes.component.css']
})
export class MyPipesComponent implements OnInit {

  birthday = new Date(2000, 1, 14); // April 15, 1988
  toggle = true; // start with true == shortDate

  constructor() { }

  ngOnInit() {
    console.log(this.birthday);
  }

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

}
