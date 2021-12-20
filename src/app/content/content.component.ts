import { Component, OnInit } from '@angular/core';
import { ChartService } from './chart/chart.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [ChartService],
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
