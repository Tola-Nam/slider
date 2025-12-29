import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CustomStyle } from '../custom-style/custom-style';
import { Loading } from '../loading/loading';

@Component({
  selector: 'app-slide-show-page',
  standalone: true,
  imports: [CommonModule, CustomStyle, Loading, RouterLink, RouterLinkActive],
  templateUrl: './test-performent.html',
  styleUrls: ['./test-performent.scss'],
})
export class TestPerforment {
  constructor(private router: Router) {}

  // Tool images for the first section
  wifiAnalyzerImage =
    'https://scontent.fpnh2-1.fna.fbcdn.net/v/t39.30808-6/606898103_1417714859983594_3981659165751492052_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGcrjQaILqrPLuJKLzQP4paQm_TNuhSnLxCb9M26FKcvBHENVq6WynVDNtOiraTMoImWigI9V83Jc4dFIo467Kr&_nc_ohc=7MdvtE2JiwoQ7kNvwG4h-gA&_nc_oc=AdmRzq3HcPGmSQJxyuuWS7xxgZPpW51LgHZGRuJIHcN7hIM8zqhyWiUdB_x9eSkhWbM&_nc_zt=23&_nc_ht=scontent.fpnh2-1.fna&_nc_gid=dquwzMO5f5YwmeeW_LJpbQ&oh=00_Afmd0kvGgTPGatX__JlD6kLBfgocnyU2_-3gTONzzflYIg&oe=69583846';
  speedTestImage =
    'https://scontent.fpnh2-2.fna.fbcdn.net/v/t39.30808-6/606334999_1417714906650256_1074431731166200003_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFhmJjIaw2h2b8iZh7x2fDanCnLP_Vgk-ecKcs_9WCT5-rkYF5fPLGVkm1RD6e0A06aY2zVNJ2dlPhF-2nkGTI6&_nc_ohc=N-mbtR4TfggQ7kNvwFp-K0n&_nc_oc=Adl-zxBecRVFDFXFzYqX_4TO-co9tRaLzgKQGV10pL-oxRTr6kXW6I09oWE8KVqlVEg&_nc_zt=23&_nc_ht=scontent.fpnh2-2.fna&_nc_gid=md0vs5BioP6YRw3OLwCChg&oh=00_AfnIT7f0CukMmcKv102zFyieq0b2Xi1_CMDvn8se2x6uJA&oe=69582FBB';

  // Sections
  sections = [
    {
      title: '1. ការវិភាគលើឆានែល និងប្រេកង់&room 110',
      description:
        'ផ្អែកលើរូបភាពខាងក្រោម យើងសង្កេតឃើញស្ថានភាពនៃរលកសញ្ញា ដូចខាងក្រោម៖',
      bullets: ['ការធ្វើវិភាគស្ថិតនៅក្នុងបន្ទប់209'],
      showTopImages: true, // flag to show two images at the top
    },
    {
      title: '2. Frequency 2.4GHz',
      description:
        'ការវិភាគលើប្រេកង់ 2.4GHz បង្ហាញពីបញ្ហាការរំខានសញ្ញាដូចខាងក្រោម៖',
      image:
        'https://scontent.fpnh2-2.fna.fbcdn.net/v/t39.30808-6/607594716_1417714943316919_507047961187591563_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH4EYUnq50w6Gqj90-UbcM-fbLn1t14M8Z9sufW3XgzxqQYDQcOZWgte8DGwbmTdxIU0D4AYPl4xbYo6hnilpvd&_nc_ohc=q_JfjR4bXAAQ7kNvwG9bjzl&_nc_oc=AdnVVnT4wh64MZu4G_wiLYLH_U-kNJ8uKJtmLjkrpy4iatAWmohBZNxy5gJRF0xBUoQ&_nc_zt=23&_nc_ht=scontent.fpnh2-2.fna&_nc_gid=T1ij5TC9QY-tJ-QggL0XPg&oh=00_Afk0RaNbwaRrSDClUhJjCcU33rCVCF7A-G0hx_ASae1yPA&oe=695809A6',
      bullets: [
        `ការត្រួតស៊ីគ្នា នៃឆានែល (Channel Overlapping):យោងតាមក្រាហ្វ WiFi Analyzer
        ខាងលើ អាចសង្កេតឃើញថា បណ្ដា ញជាច្រើនកំពុងប្រើប្រាស់ឆានែល 1, 2, 3 និង 6 ដែល
        បណ្ដា លឲ្យរលកសញ្ញា ត្រួតស៊ីគ្នា យ៉ា ងខ្លាំង។ ទោះបីជា ឆានែល 1, 6 និង 11 ជាឆានែលដែលមិន
        ត្រួតស៊ីគ្នា ក៏ដោយ ប៉ុន្តែក្នុងស្ថា នភាពនេះ Access Point ជាច្រើនកំពុងប្រើឆានែលដូចគ្នា ឬឆានែល
        ជិតគ្នា ។ ស្ថា នភាពនេះបង្កឲ្យកើតមាន Co-channel Interference និង Adjacent-channel
        Interference ដែលប៉ះពាល់ដល់ប្រសិទ្ធភាពបណ្ដា ញ។`,
        `កម្លាំងនៃការរំខាន (Interference):ក្នុងរូបភាព អាចឃើញមានរលកសញ្ញា ខ្លាំងមួយចំនួន
          ដែលមានកម្លាំងប្រហែលពី -40 dBm ដល់ -60 dBm ត្រួតស៊ីគ្នា ជាមួយរលកសញ្ញា ខ្សោយៗជាច្រើន
          (-70 dBm ដល់ -90 dBm)។ ការត្រួតស៊ីគ្នា នេះបង្កឲ្យមានការរំខានខ្លាំងក្នុងបណ្ដា ញ និងធ្វើឲ្យស្ថេរ
          ភាពនៃការតភ្ជា ប់ធ្លា ក់ចុះ។`,
      ],
      impacts: {
        title: 'ផលប៉ះពាល់:',
        items: [
          'ល្បឿនអ៊ីនធឺណិ តមិនស្ថេរភាព',
          'Latency កើនឡើង',
          'Packet Loss កើតមានញឹកញាប់',
          'បទពិសោធន៍អ្នកប្រើប្រាស់មិនល្អ ជាពិសេសនៅពេលមានអ្នកប្រើប្រាស់ច្រើន ។',
        ],
      },
    },
    {
      title: '3. Frequency 5GHz',
      description:
        `ការបែងចែកឆានែល (Channel Distribution)ពីក្រាហ្វអាចឃើញថា Access Point ត្រូវ
          បានបែងចែកលើឆានែលជាច្រើនដូចជា36,100,108,116,132, 149, 153 និង 157។ ការបែងចែក
          ឆានែលមានចន្លោះឆ្ងា យពីគ្នា បង្ហា ញថាមានការគ្រប់គ្រងឆានែលល្អ និងមិនកកស្ទះនៅឆានែលតែ
          មួយ។ជាពិសេស ឆានែល 108 (សញ្ញា ពណ៌ ខៀវ) មានកម្លាំងសញ្ញា ខ្លាំងជាងគេ ដែលបង្ហា ញថា
          Access Point នេះនៅជិតទីតាំងវាស់វែង ឬមានគុណភាពបញ្ជូ នល្អ។`,
      image:
        'https://scontent.fpnh2-3.fna.fbcdn.net/v/t39.30808-6/606289772_1417714983316915_1263757963937833195_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF7TYxh0Voh4ErrbHAsJYLpAxNhlGbeFSEDE2GUZt4VIROPBo8oafCfbIEg2q6HqbFtKyRGh5Uu-DsbAqpBMYih&_nc_ohc=aQcLYRfGhk8Q7kNvwF32Hsg&_nc_oc=Admuy7HYm9x0vJA-KSWDIC_Vp9ymHYVNy9R0lhaYbzxXXDB0K4bFn3Gzgu_Nm6PCLDw&_nc_zt=23&_nc_ht=scontent.fpnh2-3.fna&_nc_gid=Mca8tCy6ldRioVls1HD7xA&oh=00_AfnkOqW3aVTZ8g7E1ireqlUeiJrZC4wTFwH6orYDI6vdPg&oe=69582839',
      bullets: [
        `ការត្រួតស៊ីគ្នា នៃឆានែល (Channel Overlapping):ការត្រួតស៊ីគ្នានៃឆានែលនៅលើប្រេកង់ 5
        GHz មានកម្រិតទាប។ នៅតំបន់ឆានែល 36 និង 100–116 មានការត្រួតស៊ីគ្នាបន្តិចប៉ុណ្ណោះខណៈ
        ដែលឆានែលខាងលើ (132–157) ត្រូវបានបែងចែកឆ្ងាយពីគ្នានិងស្ទើរតែមិនមាន Overlapping
        ទេ។នេះបានបញ្ជាក់ថា Overlapping នៅលើ 5GHz មានតិចជាង 2.4GHz ហើយមានតែបន្តិច
        ប៉ុណ្ណោះនៅក្រុមឆានែលជាក់លាក់។`,
        `កម្លាំងនៃការរំខាន (Interference): កម្លាំងសញ្ញាសរុបភាគច្រើនស្ថិតនៅចន្លោះប្រហែល -65
          dBm ដល់ -90 dBm។ សញ្ញាខ្លាំងៗមានតិចនិងមិនមានសញ្ញាច្រើនត្រួតស៊ីគ្នានៅឆានែលដូចគ្នា ។
          នេះបង្ហា ញថា Interference នៅលើប្រេកង់ 5GHz មានកម្រិតទាបប្រៀបធៀបនឹងប្រេកង់ 2.4GHz ។`,
      ],
    },
  ];

  goToRoute(uri_route: string): void {
    this.router.navigate([uri_route]).then(() => window.scrollTo(0, 0));
  }
}
