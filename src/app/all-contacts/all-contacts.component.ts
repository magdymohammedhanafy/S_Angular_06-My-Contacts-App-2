import { Component } from '@angular/core';
import { concat } from 'rxjs';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.scss'],
})
export class AllContactsComponent {
  contacts?: Contact[];
  foundContacts?: Contact[];
  typeOfSearch: number = 0;
  searchKey!: String;
  name!: String;
  number!: String;
  email!: String;

  constructor() {
    this.contacts = [
      {
        name: 'magdy',
        phoneNumber: +201277348662,
        email: 'magdy@gmail.com',
        editState: 0,
      },
      {
        name: 'hassan',
        phoneNumber: +201277348662,
        email: 'hassan@gmail.com',
        editState: 0,
      },
      {
        name: 'sayed',
        phoneNumber: +201277348662,
        email: 'sayed@gmail.com',
        editState: 0,
      },
    ];
    this.foundContacts = this.contacts;
  }
  deleteContact(filtered: any) {
    this.contacts?.splice(
      this.contacts?.findIndex((concat) => concat.email == filtered),
      1
    );
  }

  add(name: String, number: String, email: String) {
    console.log(name);
    console.log(number);
    console.log(email);
    this.contacts?.push({
      name: name,
      phoneNumber: Number(number),
      email: email,
      editState: 0,
    });
  }
  onSelect(sele: number) {
    this.typeOfSearch = sele;
    console.log(this.typeOfSearch);
  }
  searchingKey(value: any) {
    this.searchKey = value;
    if (this.typeOfSearch == 1) {
      this.foundContacts = this.contacts?.filter(
        (contact) => contact.name == value
      );
    } else if (this.typeOfSearch == 2) {
      this.foundContacts = this.contacts?.filter(
        (contact) => contact.phoneNumber == value
      );
    } else if (this.typeOfSearch == 0) {
      this.foundContacts = this.contacts;
    }
  }

  changeEditState(email: String) {
    let editedContact: any;
    editedContact = this.contacts?.filter((contact) => contact.email == email);
    this.name = editedContact[0].name;
    this.number = editedContact[0].phoneNumber;
    this.email = editedContact[0].email;
    if (editedContact[0].editState == 0) {
      editedContact[0].editState = 1;
    } else if (editedContact[0].editState == 1) {
      editedContact[0].editState = 0;
    }
  }

  saveEdit(email: String) {
    let editedContact: any;
    editedContact = this.contacts?.filter((contact) => contact.email == email);
    editedContact[0].name = this.name;
    editedContact[0].phoneNumber = this.number;
    editedContact[0].email = this.email;
    editedContact[0].editState = 0;
  }
}
