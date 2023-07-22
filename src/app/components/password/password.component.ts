import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordStrengthComponent {
  password: string = '';

  hasLetters():boolean{
   return /[a-zA-Z]/.test(this.password);
  }
  hasDigits():boolean{
    return /\d/.test(this.password);
  }
  hasSymbols():boolean{
    return /[!@#$%^&*()_+[\]{};':"\\|,.<>?]/.test(this.password);
  }
  isEmpty(): boolean {
    return this.password.length === 0;
  }

  isSmall(): boolean {
    return this.password.length < 8 && this.password.length > 0;
  }

  isEasy(): boolean{
    return (this.hasDigits() || this.hasLetters() || this.hasSymbols())&&!this.isSmall();
  }

  isMedium(): boolean {
    return (
      (this.hasLetters() && this.hasSymbols()) ||
      (this.hasLetters() && this.hasDigits()) ||
      (this.hasDigits() && this.hasSymbols())
    )&&!this.isSmall();
  }

  isStrong(): boolean {
    return this.hasLetters() && this.hasDigits() && this.hasSymbols()&&!this.isSmall();
  }

  updatePasswordStrength(): void {
  }
}
