import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Contact } from '../models/contact';

let headers: Headers = new Headers({
    "Accept": "application/json",
    "Content-Type": "application/json"
})

let baseUrl = "http://localhost:3000/api/contacts/";

@Injectable()
export class ContactHttpService{
    constructor(private http:Http){}

    getContact(id: string): Promise<Contact> {
        // return new Promise<Contact>((resolve,reject) => {
        // });
        return this.http.get(baseUrl+id, {headers:headers})
                        .map(resp => resp.json().data)
                        .toPromise();
    }

    createContact(contact: Contact): Promise<Contact>{
        return this.http.post(baseUrl, JSON.stringify(contact), {headers: headers})
                        .map(resp => {
                            // should check resp.success to be true or false and handle accordingly
                            contact._id = resp.json()._id;
                            return contact;
                        })
                        .toPromise();
    }

    updateContact(contact: Contact): Promise<Contact> {
        return this.http.put(baseUrl+contact._id, JSON.stringify(contact), {headers: headers})
                        .map(resp => resp.json().data as Contact)
                        .toPromise();
    }

    deleteContact(id: string): Promise<any> {
        return this.http.delete(baseUrl+id)
                        .toPromise()
    }
    
    getAll(): Promise<Array<Contact>> {
        return this.http.get(baseUrl, {headers:headers})
                        .map(resp => resp.json().data)
                        .toPromise();
    }
}