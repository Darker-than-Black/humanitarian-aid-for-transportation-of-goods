import { Component, OnInit } from '@angular/core';

import { FormMixin } from '../../../mixins/FormMixin';
import { FormComponent, Priority } from '../../../type';

@Component({
  selector: 'app-priority-form',
  templateUrl: './priority-form.component.html',
  styleUrls: ['./priority-form.component.css']
})
export class PriorityFormComponent extends FormMixin implements OnInit, FormComponent {
  priorities: Priority[] = [];
  selectedPriority?: Priority;

  ngOnInit(): void {
    this.apiService.getPriorities().subscribe(data => {
      this.priorities = data;
    });

    this.selectedPriority = this.data.priority;
  }

  onSave() {
    if (!this.selectedPriority) return;

    this.updateItem({
      priority: this.selectedPriority,
    });
  }
}
