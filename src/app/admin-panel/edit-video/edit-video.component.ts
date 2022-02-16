import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';


export interface Tag {
  name: string;
}

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.css']
})
export class EditVideoComponent implements OnInit {

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: Tag[] = [{name: 'video'}, {name: 'comedy'}, {name: 'addtag'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
