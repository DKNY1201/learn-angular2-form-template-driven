import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'teacher';
  defaultGender = 'male';
  answer = '';
  genders = ['male', 'female'];

  submitted = false;
  inputtedData = {
    username: '',
    email: '',
    secretQuestion: '',
    secretAnswer: '',
    gender: ''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: 'quytran288@gmail.com'
    //   },
    //   secret: 'pet',
    //   questionAnswer: 'Milu (a dog)',
    //   gender: 'male'
    // });

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;
    this.inputtedData = {
      username: this.signupForm.value.userData.username,
      email: this.signupForm.value.userData.email,
      secretQuestion: this.signupForm.value.secret,
      secretAnswer: this.signupForm.value.questionAnswer,
      gender: this.signupForm.value.gender
    };

    this.signupForm.reset({
      userData: {
        username: 'Quy Tran'
      }
    });
  }
}
