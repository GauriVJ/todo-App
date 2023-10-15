import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  err: String = '';
  task: String = '';
  todo: String[] = [];
  Cindex =0;
  isEdit = false;

  add() {
    if (this.task.trim() !== '') { // Ensure the task is not empty
      this.todo.push(this.task);
      this.task = ''; // Clear the input field after adding the task
    }
    else {
      this.err = 'Please Enter a valid input';
    }
  }

  remove(index: number) {
    this.todo.splice(index, 1);
  }

  edit(index: number){
     this.isEdit = true;
     this.Cindex = index;
     this.task = this.task[index];
  }

  save(){
    this.todo[this.Cindex]=this.task;
    this.isEdit=false;
    this.task='';
  }
  cancelEdit(){
    this.isEdit=false;
    this.task='';

  }












  // num1 = 0;
  // num2 = 0;
  // ans = 0;
  // // today = 'mon';
  // total(){
  //   this.ans= this.num1 + this.num2;
  // }((username=='admin')&&(password=='admin'))




  //   username:String | undefined
  //   password:String | undefined
  //   str1 =''
  //   str2 =''
  //   login : boolean | undefined ;
  //    disp(){

  // if (this.username =='admin' && this.password =='admin') 
  // {
  //     this.login = true;
  // } 
  // if(this.login==true){
  //   this.str1='Login Successful'
  // }
  // else{
  //   this.str2='Login Failed!'
  // }





}







