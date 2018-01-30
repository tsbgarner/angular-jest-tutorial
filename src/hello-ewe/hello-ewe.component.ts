import {
  Component
} from '@angular/core';

@Component({
  selector: 'hello-ewe',
  styles: [],
  template: '<p>Baaa, I\'m a {{ name }}!</p>'
})
export class HelloEweComponent {
  name = 'Sheep'
}
