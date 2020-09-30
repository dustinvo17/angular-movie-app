import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  page_name : string;
  constructor() { }

  ngOnInit(): void {
    this.page_name = 'Contact'
  }

}
