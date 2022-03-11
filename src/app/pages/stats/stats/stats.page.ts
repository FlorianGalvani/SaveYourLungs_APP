import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { Storage } from '@ionic/storage-angular';

import { StatsService } from 'src/app/services/api/stats/stats.service';

import { cigarettesStats } from 'src/app/interfaces/stats/cigaretteStats';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {
  @ViewChild('barChart') barChart;
  bars: any;
  colorArray: any;
  todayCigarette: number = null;
  weekCigarette: Array<number> = [0,0,0,0,0,0,0];
  totalCigarette: number = null;
  token;
  statscigarettes: Array<cigarettesStats> = [];

  constructor(private statsService: StatsService,private storage: Storage, private router: Router) { 
    
  }
  

  async ngOnInit() {
    // this.userService.getUserInfos(this.token).subscribe( (res: any) => {
    //   this.userProfileData = res;
    // });
    await this.storage.get('ACCESS_TOKEN').then((data) => {
      this.statsService.getcigarettesInfos(data).subscribe ( (res:any) =>{
        console.log(res);
         res.forEach(element => { 
           console.log(element)
           this.statscigarettes.push(element.cigarettes)
         });
        //  this.bars.
         this.bars.update()
         console.log(this.statscigarettes)
      })

    })
   

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
        labels: ['D', 'L', 'M', 'M', 'J', 'V', 'D'],
        datasets: [{
          label: 'cigarettes',
          data: this.statscigarettes,
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
