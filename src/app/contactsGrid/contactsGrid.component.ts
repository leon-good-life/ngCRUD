import { Component } from '@angular/core';
import { DataService } from '../utils/data.service';

@Component({
  selector: 'contacts-grid',
  template: `
    <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Company</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
      <tr *ngFor="let contact of dataService.data">
        <td>{{contact.firstName}}</td>
        <td>{{contact.lastName}}</td>
        <td>{{contact.company}}</td>
        <td>{{contact.phone}}</td>
        <td>{{contact.email}}</td>
      </tr>
    </table>  
  `,
  styles: [`
    * {
      font-family: Helvetica;
    } 
    table {
      margin: 0 auto;
      border-collapse: collapse;
      border: 1px solid lightgray;
    }
    th, td {
        text-align: left;
        padding: 20px;
    }
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
  `]
})
export class ContactsGridComponent {
  constructor(private dataService: DataService) {}
}