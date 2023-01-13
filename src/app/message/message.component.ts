import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input() error: string = "";
  @Input() control: any;
  @Input() text: string = "";

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }

}
