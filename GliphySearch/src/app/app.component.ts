import { Component } from '@angular/core';
import { GliphysearchService } from './gliphysearch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'GliphySearch';

  giphies = [];

  constructor(private _service: GliphysearchService) {
  }

  performSearch(searchTerm: HTMLInputElement): void {
    this._service.getGliphy(searchTerm).subscribe((res: any) => {
      this.giphies = res.data;
      console.log(this.giphies);
    });
  }
}
