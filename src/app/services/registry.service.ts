import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {

  private apiUrl = 'https://qr-contact-api.onrender.com/api/contact'; //PROD
  // private apiUrl = 'http://localhost:3000/api/contact'; //LOCAL NODE

  constructor(private http: HttpClient) { }

  sendContactData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

}
