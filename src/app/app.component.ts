import { Component, Inject } from '@angular/core';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  msg = "";
  
  constructor(@Inject (WelcomeService) private service:WelcomeService){ }
 
  getMsg(){
    this.service.getWelcomeMsg().subscribe(data => {
      this.msg = data;
    });
  }

}