import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Health } from '@awesome-cordova-plugins/health/ngx';
import { Storage } from '@ionic/storage-angular';
import { Chart } from 'chart.js';

interface Notification {
  title: string;
  content: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  @ViewChild('barChart') barChart;
  bars: any;
  colorArray: any;
  todaySteps: number = null;
  weekSteps: Array<number> = [0,0,0,0,0,0,0];
  totalWeekSteps: number = null;
  dayOfTheWeek =  new Date().getDay();
  constructor(private health: Health, private storage: Storage, private router: Router) {

  }

  ngOnInit(): void {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    this.health.query({
      startDate: start,
      endDate: end,
      dataType: 'steps',
      limit: 1000,

    }).then((data) => {
      if(data) {
        data.forEach((steps) => {
          this.todaySteps += parseInt(steps.value,10);
        });
      }
    }).catch(e => console.error(e));

    const curr = new Date(); // get current date
    const first = curr.getDate() - curr.getDay() ; // First day is the day of the month - the day of the week
    const last = first + 6; // last day is the first day + 6

    const firstday = new Date(curr.setDate(first));
    firstday.setHours(0,0,0,0);
    const lastday = new Date(curr.setDate(last));
    lastday.setHours(23, 59, 59, 999);


    this.health.queryAggregated({
      startDate: firstday, // three days ago
      endDate: lastday, // now
      dataType: 'steps',
      bucket:'day'
    }).then((data) => {
      if(data) {
        const steps: Array<number> = [];
        let totalSteps = 0;
        data.forEach((stepPerWeekDay) =>{
          const value = parseInt(stepPerWeekDay.value,10);
          steps.push(value);
          totalSteps += value;
        });
        this.totalWeekSteps = totalSteps;
        this.weekSteps = steps;
      }
    }).catch(e => console.error(e));

    this.storage.get('ACCESS_TOKEN').then((data) => {

      console.log(data);

      if (!data) {
        this.router.navigate(['/landing-page']);
      }

    });
  }
  ionViewDidEnter() {
    this.createBarChart();
    this.bars.update();
  }
  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
        datasets: [{
          label: 'Pas',
          data: this.weekSteps,
          backgroundColor: [
            this.dayOfTheWeek === 0 ? 'rgb(255,0,0)' : 'rgb(38, 194, 129)',
            this.dayOfTheWeek === 1 ? 'rgb(255,0,0)' : 'rgb(38, 194, 129)',
            this.dayOfTheWeek === 2 ? 'rgb(255,0,0)' : 'rgb(38, 194, 129)',
            this.dayOfTheWeek === 3 ? 'rgb(255,0,0)' : 'rgb(38, 194, 129)',
            this.dayOfTheWeek === 4 ? 'rgb(255,0,0)' : 'rgb(38, 194, 129)',
            this.dayOfTheWeek === 5 ? 'rgb(255,0,0)' : 'rgb(38, 194, 129)',
            this.dayOfTheWeek === 6 ? 'rgb(255,0,0)' : 'rgb(38, 194, 129)',
          ], // array should have same number of elements as number of dataset
          borderColor: [
            this.dayOfTheWeek === 0 ? 'rgb(255,0,0)' : 'rgb(38, 194, 129)',
            this.dayOfTheWeek === 1 ? 'rgb(255,0,0)' : 'rgb(38, 194, 129)',
            this.dayOfTheWeek === 2 ? 'rgb(255,0,0)' : 'rgb(38, 194, 129)',
            this.dayOfTheWeek === 3 ? 'rgb(255,0,0)' : 'rgb(38, 194, 129)',
            this.dayOfTheWeek === 4 ? 'rgb(255,0,0)' : 'rgb(38, 194, 129)',
            this.dayOfTheWeek === 5 ? 'rgb(255,0,0)' : 'rgb(38, 194, 129)',
            this.dayOfTheWeek === 6 ? 'rgb(255,0,0)' : 'rgb(38, 194, 129)',
          ],// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
        }
      }
    });
  }
}
