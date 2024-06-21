import { Component } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrl: './right-container.component.css'
})
export class RightContainerComponent {

  //fa icons
  faThumbsUp:any = faThumbsUp;
  faThumbsDown:any = faThumbsDown;
  faFaceSmile:any = faFaceSmile;
  faFaceFrown:any = faFaceFrown;

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
