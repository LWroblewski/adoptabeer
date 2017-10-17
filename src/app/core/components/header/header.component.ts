import {ChangeDetectionStrategy, Component, EventEmitter, OnInit} from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor() {}

  ngOnInit(): void {}

  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }
  closeModal() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }
}
