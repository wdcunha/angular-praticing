import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../core/services/employee.service';
import {Employee} from '../../core/models/Employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  // allEmployee: Employee[]; // moved to  employee.service
  msg: any;

  constructor(public employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.employeeService.getAllEmployees();
      /*.subscribe(    // moved all this to the employee.service
      (data: Employee[]) => {
        this.allEmployee = data;
        console.table(this.allEmployee);
      });*/
  }

  deleteEmployee(id: number) {
    console.log(id);
    this.employeeService.deleteEmployee(id).subscribe(
      (data: Employee) => {
        this.getAllEmployee();
      }
    );
  }

  edit(emp: Employee) {
    this.employeeService.currentEmployee = Object.assign({}, emp);
  }
}
