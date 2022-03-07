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
  constructor(private health: Health, private storage: Storage, private router: Router) {

  }


  ngOnInit(): void {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    this.health.query({
      startDate: start, // three days ago
      endDate: end, // now
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
    console.log('===========================================');
    console.log(this.bars.data.datasets[0]);
    console.log('===========================================');
    this.bars.update();
  }
  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['D', 'L', 'M', 'M', 'J', 'V', 'D'],
        datasets: [{
          label: 'Pas',
          data: this.weekSteps,
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
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
