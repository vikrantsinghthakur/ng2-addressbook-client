import {Component} from '@angular/core';
import {Contact} from '../models/contact';
import {ContactService} from '../services/contact.service';
import { ContactHttpService } from '../services/contact.httpservice';

@Component({
    selector: "contact-list",
    templateUrl: "./templates/contact-list.html"
})

export class ContactListComponent{
    token: string = "";
    contacts: Array<Contact> = [];
    constructor(private service: ContactHttpService){
        service.getAll().then(data => {
            this.contacts = data;
        });
    }
    btnHandler(){
        console.log("Token", this.token);
    }
    typingHandler(e:any){
        this.token = e.target.value;
    }
}