import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();

  constructor( private autService: AuthService) {}
  
  register() {
    this.autService.register(this.model).subscribe(
      (response: any) =>{

      },
      (error) =>{
        
      }
    );
  }

  cancel(){
    this.cancelRegister.emit(false);
  }
  
  ngOnInit() {}
}
