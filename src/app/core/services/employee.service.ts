import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../models/Employee.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {ComponentsService} from '../../shared/components/components.service';

const headerOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class EmployeeService {

  allEmployee: Employee[];

  jsonServerUrl = 'http://localhost:3000/Employee';

  currentEmployee: Employee = {
    id: null,
    firstName: '',
    lastName: '',
    designation: '',
    contact: null,
    address: ''
  };

  constructor(
    private httpClient: HttpClient,
    private ngxSpinnerService: NgxSpinnerService,
    private modal: ComponentsService
  ) {}

  getAllEmployees() {
    this.modal.showDialog(true);
    this.ngxSpinnerService.show();
    return this.httpClient.get<Employee[]>(this.jsonServerUrl, headerOption).subscribe(
      (data: Employee[]) => {
        this.allEmployee = data;
        console.table(this.allEmployee);
        setTimeout(() => {
          this.ngxSpinnerService.hide();
        }, 500);
        setTimeout(() => {
          this.modal.showDialog(false);
        }, 3000);
      });
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.httpClient.delete<Employee>(this.jsonServerUrl + '/' + id, headerOption);
  }

  createEmployee(emp: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.jsonServerUrl, emp, headerOption);
  }

  updateEmployee(emp: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(this.jsonServerUrl + '/' + emp.id, emp, headerOption);
  }
}
