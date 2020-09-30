import { Component, OnInit,Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  @Output() searchSubmit = new EventEmitter();
  profileForm = new FormGroup(
    {
      keyword: new FormControl('')
    }
  )
  constructor() { }

  ngOnInit(): void {
  }
  onFormSubmit(){
    const {keyword}= this.profileForm.value
    this.searchSubmit.emit(keyword)
    this.profileForm.setValue({keyword:''})
  }

}
