import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment.local'; // Artık doğru yolu kullanıyorsunuz

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  private apiUrl = `${environment.apiUrl}/login`;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password });
  }

  getAllApartments(): Observable<any> {
    return this.http.get(`${this.apiUrl}apartments`);
  }

  saveApartment(apartment: any): Observable<any> {
    return this.http.post(`${this.apiUrl}apartments`, apartment);
  }

  deleteApartment(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}apartments/${id}`);
  }
}
