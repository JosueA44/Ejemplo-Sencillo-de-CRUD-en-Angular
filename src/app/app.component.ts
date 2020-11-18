import { Component } from '@angular/core';
import { Employee } from './models/employee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD Simple';
  employeArray: Employee[] = [
    {id: 1, name: 'Josue', country: 'España' },
    {id: 2, name: 'Karla', country: 'España' },
    {id: 3, name: 'Elizabeth', country: 'España' },
    {id: 4, name: 'Marcos', country: 'España' }
  ];
  selectedEmployee: Employee = new Employee();

  addOrEdit(){
    if (this.selectedEmployee.id === 0){
      this.selectedEmployee.id = this.employeArray.length + 1;
      this.employeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee();
  }

  openEdit(n: Employee){
    this.selectedEmployee = n;
  }

  deleted(){
    if (confirm('Are you sure  ?')){
      this.employeArray = this.employeArray.filter(x => x != this.selectedEmployee );
      this.selectedEmployee = new Employee();
    }
  }

}
