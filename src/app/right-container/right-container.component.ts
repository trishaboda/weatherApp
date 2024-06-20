import { Component } from '@angular/core';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrl: './right-container.component.css'
})
export class RightContainerComponent {
  //control tabs variables
  today: boolean = false;
  week: boolean = true;

  //metric value variables
  celsius: boolean = true;
  fahrenheit: boolean = false;


//function to change tabs
  onTodayClick() {
    this.today = true;
    this.week = false;
  }
  onWeekClick() {
    this.today = false;
    this.week = true;
  }
  //function to control metric values
  onCelsiusClick() {
    this.celsius = true;
    this.fahrenheit = false;
  }
  onFahrenheitClick() {
    this.celsius = false;
    this.fahrenheit = true;
  }
} 
