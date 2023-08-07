import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuccessMessageComponent {

  @Input() paymentInfoId: string

}
