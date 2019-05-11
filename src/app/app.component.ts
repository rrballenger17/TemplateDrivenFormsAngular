import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'
})
export class AppComponent {
  onSubmit(formData) {                                                       
     console.log(formData);
     console.log("first: " + formData.firstName);
     console.log("password 1: " + formData.passwordsGroup.password);
     
    }
}


