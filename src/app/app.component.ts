import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // num1 = 0;
  // num2 = 0;
  // ans = 0;
  // // today = 'mon';
  // total(){
  //   this.ans= this.num1 + this.num2;
  // }((username=='admin')&&(password=='admin'))
  username : String ='admin'
  password : String ='admin'
  login : boolean=false;
   disp(){
  
if (this.username==='admin' && this.password==='admin') 
{
    this.login = true;
} 
else
{
    this.login = false; //This will be executed
}
   }
  
 

  
 

}
