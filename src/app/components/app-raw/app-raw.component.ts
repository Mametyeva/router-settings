import { Component } from '@angular/core';
import { DataRaw } from 'src/app/models/modelDataRaw'
import { dataRaw } from 'src/app/data/data-raw'

@Component({
  selector: 'app-raw',
  templateUrl: './app-raw.component.html',
  styleUrls: ['./app-raw.component.scss']
})
export class AppRawComponent {

  data: DataRaw = dataRaw;
}
