// item.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = `${environment.API_URL}:${environment.API_PORT}/items`;

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(this.apiUrl);
  }
}
