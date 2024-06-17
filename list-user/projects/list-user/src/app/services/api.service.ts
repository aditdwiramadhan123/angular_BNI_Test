import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { DataSend } from '../models/user.model';


@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    return this.http.get<any>(environment.apiUrl);
  }

  createUser(userData: DataSend): Observable<any> {
    return this.http.post<any>(environment.apiUrl, userData);
  }

  updateData(id: number, data: DataSend): Observable<DataSend> {
    return this.http.put<DataSend>(`${environment.apiUrl}/${id}`, data).pipe(
      map((response) => response),
      catchError((error) => throwError(error))
    );
  }

  deleteUser(userId: number): Observable<any> {
    const url = `${environment.apiUrl}/${userId}`;
    return this.http.delete<any>(url);
  }
}
