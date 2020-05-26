import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeComponent} from '../../shared/employees/employee.component';
import {EmployeesListComponent} from '../../shared/employees-list/employees-list.component';
import {EmployeeService} from '../../core/services/employee.service';
import {FormsModule} from '@angular/forms';

/**
 * Angular With Malik
 * 7 Part 1 Angular6, Json Server CRUD
 * https://www.youtube.com/watch?v=shMvTzUeSfc
 */

@NgModule({
  declarations: [EmployeeComponent, EmployeesListComponent],
  exports: [
    EmployeeComponent,
    EmployeesListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [EmployeeService]
})
export class EmployeeModule {
}
