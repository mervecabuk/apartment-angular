import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // AuthService'i import et

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log('Giriş başarılı', response);
        // Başarılı girişten sonra yapılacak işlemler
      },
      error => {
        console.error('Giriş başarısız', error);
        // Hata durumunda yapılacak işlemler
      }
    );
  }
}
