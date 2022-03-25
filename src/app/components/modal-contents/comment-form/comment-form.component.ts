import { Component, OnInit } from '@angular/core';

import { FormMixin } from '../../../mixins/FormMixin';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent extends FormMixin implements OnInit {
  constructor(apiService: ApiService) {
    super(apiService);
  }

  comment: string = '';

  ngOnInit(): void {
    this.comment = this.data.comment || '';
  }
}
