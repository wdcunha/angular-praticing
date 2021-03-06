import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../core/services/employee.service';
import {Employee} from '../../core/models/Employee.model';
import {ToastrService} from 'ngx-toastr';

/**
 * Angular With Malik
 * 7 Part 1 Angular6, Json Server CRUD
 * https://www.youtube.com/watch?v=shMvTzUeSfc
 */
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(
    public employeeService: EmployeeService,
    public toastrService: ToastrService
    ) { }

  ngOnInit(): void {
  }

  createAndUpdate(currentEmployee: Employee) {
    console.log('currentEmployee: ' + currentEmployee);
    if (currentEmployee.id != null) {
      console.log('update');
      this.updateEmployee(currentEmployee);
    } else {
      console.log('create');
      this.createEmployee(currentEmployee);
    }
  }

  createEmployee(emp: Employee) {
    this.employeeService.createEmployee(emp).subscribe(
      (result: Employee) => {
        this.employeeService.getAllEmployees();
        this.toastrService.success('Employee created successfully!', 'Employee CRUD');
        this.clearEmployee();
      }
    );
  }

  updateEmployee(emp: Employee) {
    this.employeeService.updateEmployee(emp).subscribe(
      (result: Employee) => {
        this.employeeService.getAllEmployees();
        this.toastrService.info('Employee updated successfully!', 'Employee CRUD');
        this.clearEmployee();
      }
    );
  }

  clearEmployee() {
    this.employeeService.currentEmployee = {
      id: null,
      firstName: '',
      lastName: '',
      designation: '',
      contact: null,
      address: ''
    };

  }
}
