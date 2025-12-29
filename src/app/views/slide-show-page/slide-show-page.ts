import { Component } from '@angular/core';
import { CustomStyle } from '../custom-style/custom-style';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Loading } from '../loading/loading';
import { CommonModule } from '@angular/common';
import { title } from 'process';
@Component({
  selector: 'app-slide-show-page',
  standalone: true,
  imports: [CommonModule, CustomStyle, Loading, RouterLink, RouterLinkActive],
  templateUrl: './slide-show-page.html',
  styleUrls: ['./slide-show-page.scss'],
})
export class SlideShowPage {
   constructor(private router: Router) {}

   sections = [
    {
      title: '2. ទំហំកិច្ចការ',
      description:
        'ទំហំកិច្ចការនៃ ការសិក្សានេះ គឺផ្តោតលើការវិភាកបណ្តាញឥតខ្សែនៃសកលវិទ្យាល័យភូមិន្ទភ្នំពេញ។ នៅក្នុងបន្ទុប់ជាប់គ្នាយ៉ាងហោចណាស់២បន្ទប់ ដោយមានគោលបំណងដូចខាងក្រោម​៖',
      bullets: [
        'វិភាគកម្លាំងសញ្ញា WiFi នៅតំបន់ផ្សេងៗ',
        'កំណត់ការប្រើប្រាស់ឆានែល និង​ ការរមខាន',
        'ប្រៀបធៀបប្រសិទ្ធភាពបណ្តាញ WiFi 2.4 GHz និង 5 GHz',
        'វាស់ល្បឿនបណ្តាញដោយប្រើ Speedtest',
        'ផ្តល់អនុសាសន៍សម្រាប់ការកែលម្អបណ្តាញ RUPP'
      ]
    },
    {
      title: '3. ការអនុវត្ត',
      description:
        'ការអនុវត្តការសិក្សារនេះ​ ត្រូវបានធ្វើឡើងដោយប្រើឧបករណ៍​ និង​ វិធីសាស្ត្រដូចខាងក្រោម ៖',
      tools: [
        {
          name: 'WiFi Analyzer',
          shortDescription: 'Test speed by Ookla',
          description:
            'Windows Application សម្រាប់វាស់កម្លាំងសញ្ញា (dBm), Channel និងគុណភាពសញ្ញា',
          testSpeed:
            'Test speed By Ookla ប្រើសម្រាប់វាស់ល្បឿបទាញយក(download)​ ល្បឿនផ្ញើចេញ(upload)&(ping)'
        }
      ]

    },{
      title: '3. វិធីសាស្រ្ត និង​ លទ្ធផល',
      bullets:[
        'ជ្រើសរើស ២ បន្ទប់ នៅក្នុងសាកលវិទ្យាល័យ RUPP មានបន្ទប់ 110 និង 209 នៃអគារ B',
        'ស្កេនបណ្ដា ញ WiFi ដោយប្រើ WiFi Analyzer',
        'វាស់ល្បឿន ដោយប្រើ Speed Test By Ookla',
        'កត់ត្រាកម្លាំងសញ្ញា ឆានែល និងប្រេកង់',
        'វិភាគការប៉ះទង្គិចឆានែល និងការរំខាន'
      ]
    }
  ];

  wifiImage = 'https://imgs.search.brave.com/r3vFP9cFFoFRZI7nQpGxRoDDhq2B3R_K_gexe9QxAvY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/ZS1pbWFnZXMucy1t/aWNyb3NvZnQuY29t/L2ltYWdlL2FwcHMu/MTMwMDAuMTM1MTA3/OTg4ODUwMjYwNDMu/ZjkzYTdhOGEtMGEz/OC00MmIzLTk5OGUt/ODllNTgzN2I5NjU4/LmZlNjVkMGRjLTZm/MzQtNDlmZS04NDJl/LWZlZmI2YWRhMDhi/MQ';
  testSpeed = 'https://imgs.search.brave.com/pSJCrvB6lvy7J_fm4m3DuTtILC3CFtMu303WqzIT7-4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/anNkZWxpdnIubmV0/L2doL2hvbWFyci1s/YWJzL2Rhc2hib2Fy/ZC1pY29ucy9wbmcv/b29rbGEtc3BlZWR0/ZXN0LnBuZw';
   goToRoute(uri_route : string): void {
    this.router
      .navigate([uri_route])
      .then(() => {
        window.scrollTo(0, 0);
    });
  }
}
