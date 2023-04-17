import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "./employee";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/employees/employeesList"
  private postURL = "http://localhost:8080/employees/addEmployee"
  private updateURL = "http://localhost:8080/employees/id"
  private updateUR1L = "http://localhost:8080/employees/update"
  private deleteURL = "http://localhost:8080/employees/delete"


  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`)
  }

  createEmployee(employee:Employee): Observable<Object>{
    return this.httpClient.post(this.postURL,employee);
  }

  getEmployeeById(id:number):Observable<Employee>{
    return  this.httpClient.get<Employee>(`${this.updateURL}/${id}`);
  }

  updateEmployee(id:number,employee:Employee):  Observable<Object>{
    return this.httpClient.put(`${this.updateUR1L}/${id}`,employee)
  }

  deleteEmployee(id:number):Observable<Object>{
    return this.httpClient.delete<string>(`${this.deleteURL}/${id}`)

  }
}
