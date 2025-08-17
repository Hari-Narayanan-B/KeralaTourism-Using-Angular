import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards {

  @Input() title ="No value";
  @Input() description="No value";
  @Input() imgLink="No value";
}
