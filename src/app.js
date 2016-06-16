import {inject} from 'aurelia-framework';
import {DialogService} from 'aurelia-dialog';
import {RatingDialog} from './rating-dialog';

@inject(DialogService)
export class App {

  rating = 3;

  constructor(dialogService) {
    this.dialogService = dialogService;
  }

  rate() {
    this.dialogService.open({viewModel: RatingDialog, model: this.rating})
      .then(response => {
        if(!response.wasCancelled) {
          console.log('OK');
          this.rating = response.output;
        } else {
          console.log('Cancel');
        }
        console.log(response.output);
      });
  }
}
