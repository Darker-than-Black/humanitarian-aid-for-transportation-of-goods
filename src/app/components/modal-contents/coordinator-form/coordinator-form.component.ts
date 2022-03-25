import { Component } from '@angular/core';

import { FormMixin } from '../../../mixins/FormMixin';
import { FormComponent } from '../../../type';

@Component({
  selector: 'app-coordinator-form',
  templateUrl: './coordinator-form.component.html',
  styleUrls: ['./coordinator-form.component.css']
})
export class CoordinatorFormComponent extends FormMixin implements FormComponent {
  override updateItem(): void {
    this.loading = true;

    this.apiService.setCoordinator(this.data).subscribe(data => {
      this.loading = false;
      this.finally.emit(data);
    });
  }
}
