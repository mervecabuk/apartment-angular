import { Component, OnInit } from '@angular/core';
import { ApartmentService } from './apartment.service';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {

  apartments: any[] = [];

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit(): void {
    this.loadApartments();
  }

  loadApartments(): void {
    this.apartmentService.getAllApartments().subscribe(data => {
      this.apartments = data;
    });
  }

  deleteApartment(id: number): void {
    this.apartmentService.deleteApartment(id).subscribe(() => {
      this.loadApartments(); // Apartman silindikten sonra listeyi günceller
    });
  }
}
