import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApartmentService } from './apartment.service';

@Component({
  standalone: true, // Standalone bileşen olarak tanımlayın
  imports: [FormsModule], // FormsModule'u doğrudan bileşen içinde import edin
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  password: string = '';

  constructor(private apartmentService: ApartmentService, private router: Router) {}

  onSubmit() {
    this.apartmentService.login(this.username, this.password).subscribe(
      (response) => {
        alert('Giriş başarılı!');
        this.router.navigate(['/homepage']);
      },
      (error) => {
        alert('Giriş başarısız: Geçersiz kullanıcı adı veya şifre.');
      }
    );
  }
}
