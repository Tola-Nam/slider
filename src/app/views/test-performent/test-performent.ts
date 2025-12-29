import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CustomStyle } from '../custom-style/custom-style';
import { Loading } from '../loading/loading';

export interface ConclusionItem {
  text: string;
}

export interface ConclusionSection {
  title: string;
  description?: string;
  items: ConclusionItem[];
}

export interface Section {
  conclusion?: ConclusionSection;
}

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
    'https://scontent.fpnh8-2.fna.fbcdn.net/v/t39.30808-6/607652354_1417714803316933_3875511728656511598_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGxSFqmHDzeCNXpKd1ip8FoxwWqXbFcRWHHBapdsVxFYTzoztH0Ao5LbQ5xOyyLIsk7FS6vnS6ZeJOZOcTswIZI&_nc_ohc=nUF0TAYnbDQQ7kNvwEaMUuH&_nc_oc=Adm4XR1ToXDSnS5fVFLn3Wi3gN5-4h27n6a83MCzFgWBkCFJOaqdvZRUxI4KAxiRUkE&_nc_zt=23&_nc_ht=scontent.fpnh8-2.fna&_nc_gid=vjbzgDLBoPSMbN2hgP9yFA&oh=00_AfluzuxJyh9HwuwrB8XhS1CWB9Jm8vKaPhk4T8g4-gMVBQ&oe=69588E17';
  speedTestImage =
    'https://scontent.fpnh8-3.fna.fbcdn.net/v/t39.30808-6/603875264_1415592136862533_7063840215327811242_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE6ac9Zei0wwxVHSRzOywdfWirlL3Ek8CNaKuUvcSTwI3ms4Y0EckaZun2YoB_znVLbH_ZiVDQUd-9qT55peIxt&_nc_ohc=IznVcXH2v64Q7kNvwH16P6l&_nc_oc=AdnKY7g6tRlbeeZDBdgs5LhFOoez5CFpYjA5hqAbU9wmJOvPFzH_2ztmPqsXWHoTeuc&_nc_zt=23&_nc_ht=scontent.fpnh8-3.fna&_nc_gid=D8hugA3Zu76bnWTpCEOFPg&oh=00_AfmGTN5nYq5ZAS_VZH6Bsn3NCC_b4SrLN5J9aTjDt3C4Pg&oe=69588D59';

  // Sections
  sections = [
    {
      title: 'លទ្ធផលតេស្តល្បឿនអ៊ីនធឺណិត Internet Speed Performance',
      description:
        'ល្បឿន Internet នៅក្នុងបន្ទប់110',
      bullets: ['ការធ្វើវិភាគស្ថិតនៅក្នុងបន្ទប់209'],
      showTopImages: true, // flag to show two images at the top
    },
    {
      title: 'យោងតាមរូបភាពខាងលើល្បឿនអ៊ីនធឺណិតដែលទទួលបានជាក់ស្តែងគឺ៖',
      description:
        'ការវិភាគលើប្រេកង់ 2.4GHz បង្ហាញពីបញ្ហាការរំខានសញ្ញាដូចខាងក្រោម៖',
      image:
        'https://scontent.fpnh2-2.fna.fbcdn.net/v/t39.30808-6/607594716_1417714943316919_507047961187591563_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH4EYUnq50w6Gqj90-UbcM-fbLn1t14M8Z9sufW3XgzxqQYDQcOZWgte8DGwbmTdxIU0D4AYPl4xbYo6hnilpvd&_nc_ohc=q_JfjR4bXAAQ7kNvwG9bjzl&_nc_oc=AdnVVnT4wh64MZu4G_wiLYLH_U-kNJ8uKJtmLjkrpy4iatAWmohBZNxy5gJRF0xBUoQ&_nc_zt=23&_nc_ht=scontent.fpnh2-2.fna&_nc_gid=T1ij5TC9QY-tJ-QggL0XPg&oh=00_Afk0RaNbwaRrSDClUhJjCcU33rCVCF7A-G0hx_ASae1yPA&oe=695809A6',
      bullets: [
        `ការធ្វើតេស្តនៅក្នុងបន្ទប់ 109 : ល្បឿនទាញយក (Download) = 4.99Mbps, ល្បឿនបង្ហោះ (Upload) = 2.37 Mbps, Ping = 5 ms។`,
        `ការធ្វើតេស្តនៅក្នុងបន្ទប់ 110 : ល្បឿនទាញយក (Download) = 9.30Mbps, ល្បឿនបង្ហោះ (Upload) = 8.82 Mbps, Ping = 4 ms។`,
      ],
      impacts: {
        title: 'ការសន្និដ្ឋាន :',
        items: [
          `ល្បឿននេះស្ថិតក្នុងកម្រិតមធ្យម (ប្រហែល 10Mbps) ដែលស្របទៅនឹងការរៀបរាប់ក្នុងឯកសារគម្រោងថា RUPP ប្រើប្រាស់កញ្ចប់អ៊ីនធឺណិត 10Mbps។ ផ្អែកលើលទ្ធផល Speed test វ៉ាយហ្វាយរបស់សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញគឺយឺតដោយសារល្បឿនអ៊ីនធឺណិតរបស់`,
          'សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញពី ISP មានកម្រិតទាបខ្លាំងរួចស្រាប់ទៅហើយ',
          'Packet Loss កើតមានញឹកញាប់',
          'បទពិសោធន៍អ្នកប្រើប្រាស់មិនល្អ ជាពិសេសនៅពេលមានអ្នកប្រើប្រាស់ច្រើន ។',
        ],
      },
    },
    {
      title: 'លទ្ធផលល្បឿនInternet',
      description:
        ``,
      image:
        'https://scontent.fpnh2-3.fna.fbcdn.net/v/t39.30808-6/606289772_1417714983316915_1263757963937833195_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF7TYxh0Voh4ErrbHAsJYLpAxNhlGbeFSEDE2GUZt4VIROPBo8oafCfbIEg2q6HqbFtKyRGh5Uu-DsbAqpBMYih&_nc_ohc=aQcLYRfGhk8Q7kNvwF32Hsg&_nc_oc=Admuy7HYm9x0vJA-KSWDIC_Vp9ymHYVNy9R0lhaYbzxXXDB0K4bFn3Gzgu_Nm6PCLDw&_nc_zt=23&_nc_ht=scontent.fpnh2-3.fna&_nc_gid=Mca8tCy6ldRioVls1HD7xA&oh=00_AfnkOqW3aVTZ8g7E1ireqlUeiJrZC4wTFwH6orYDI6vdPg&oe=69582839',
      bullets: [
        `បន្ទប់110:4.99 Mbps/2.37 Mbps/5 ms`,
        `បន្ទប់209:9.30 Mbps/8.82 Mbps/4 ms`,
      ],
    },
     {
      title: 'មូលហេតុដែលInternet Slow',
      description:
        ``,
      image:
        'https://scontent.fpnh2-3.fna.fbcdn.net/v/t39.30808-6/606289772_1417714983316915_1263757963937833195_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF7TYxh0Voh4ErrbHAsJYLpAxNhlGbeFSEDE2GUZt4VIROPBo8oafCfbIEg2q6HqbFtKyRGh5Uu-DsbAqpBMYih&_nc_ohc=aQcLYRfGhk8Q7kNvwF32Hsg&_nc_oc=Admuy7HYm9x0vJA-KSWDIC_Vp9ymHYVNy9R0lhaYbzxXXDB0K4bFn3Gzgu_Nm6PCLDw&_nc_zt=23&_nc_ht=scontent.fpnh2-3.fna&_nc_gid=Mca8tCy6ldRioVls1HD7xA&oh=00_AfnkOqW3aVTZ8g7E1ireqlUeiJrZC4wTFwH6orYDI6vdPg&oe=69582839',
      bullets: [
        `គម្រោងអ៊ីនធឹណឺតមានល្បឿនទាបស្រាប់ទៅហើយ ( Internet Plan low speed )`,
        `គម្រោង Internet ត្រូវបានចែកជាច្រើន Access Point ដើម្បីគ្របដណ្ដ បអគារទាំងមូល`,
        `អ្នកប្រើប្រាស់ច្រើនឬឧបករណ៍ប្រើប្រាស់ច្រើន ។`
      ],
    },
     {
      title: 'ល្បឿននេះគឺគ្រប់គ្រាន់សម្រាប់តែ',
      description:
        ``,
      image:
        'https://scontent.fpnh2-3.fna.fbcdn.net/v/t39.30808-6/606289772_1417714983316915_1263757963937833195_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF7TYxh0Voh4ErrbHAsJYLpAxNhlGbeFSEDE2GUZt4VIROPBo8oafCfbIEg2q6HqbFtKyRGh5Uu-DsbAqpBMYih&_nc_ohc=aQcLYRfGhk8Q7kNvwF32Hsg&_nc_oc=Admuy7HYm9x0vJA-KSWDIC_Vp9ymHYVNy9R0lhaYbzxXXDB0K4bFn3Gzgu_Nm6PCLDw&_nc_zt=23&_nc_ht=scontent.fpnh2-3.fna&_nc_gid=Mca8tCy6ldRioVls1HD7xA&oh=00_AfnkOqW3aVTZ8g7E1ireqlUeiJrZC4wTFwH6orYDI6vdPg&oe=69582839',
      bullets: [
        `ការរុករកវេប (Researching in Browsing)`,
        `មើល YouTube 480p / 720p`,
        `កម្មវិធីតូចៗឬបន្ទុកទាប`
      ],
    },
     {
      title: 'មិនសមស្របសម្រាប់',
      description:
        ``,
      image:
        'https://scontent.fpnh2-3.fna.fbcdn.net/v/t39.30808-6/606289772_1417714983316915_1263757963937833195_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF7TYxh0Voh4ErrbHAsJYLpAxNhlGbeFSEDE2GUZt4VIROPBo8oafCfbIEg2q6HqbFtKyRGh5Uu-DsbAqpBMYih&_nc_ohc=aQcLYRfGhk8Q7kNvwF32Hsg&_nc_oc=Admuy7HYm9x0vJA-KSWDIC_Vp9ymHYVNy9R0lhaYbzxXXDB0K4bFn3Gzgu_Nm6PCLDw&_nc_zt=23&_nc_ht=scontent.fpnh2-3.fna&_nc_gid=Mca8tCy6ldRioVls1HD7xA&oh=00_AfnkOqW3aVTZ8g7E1ireqlUeiJrZC4wTFwH6orYDI6vdPg&oe=69582839',
      bullets: [
        `លេងហ្គេមតាមInternet`,
        `Download File ឬ ឯកសារដែលមានទំហំធំ`,
      ],
    },
  ];

  inconclution: Section[] = [
  {
    conclusion: {
      title: 'សរុបមកវិញ :',
      description:
        `\n\tតាមការវិភាគទាំងពីរបន្ទប់កន្លងមកយើងអាចសន្និដ្ឋានបានថា Wifi នៅបន្ទប់ 209 មានកម្លាំងល្បឿននិងគុណភាពដំណើរការល្អជាងបន្ទប់ 110 ។\t\n\tការសិក្សាករណីនេះបានបង្ហាញថាបណ្ដាញឥតខ្សែនៅក្នុងRUPP រវាងទាំងពីរបន្ទប់មានការគ្របដណ្តប់ល្អប៉ុន្តែប្រសិទ្ធភាពនៅតែខុសគ្នាអាស្រ័យលើប្រេកង់ការរំខាននិងទីតាំង Access Point។ បណ្ដាញ 5GHz មានប្រសិទ្ធភាពល្អជាង 2.4GHz និងសមស្របសម្រាប់ការប្រើប្រាស់ល្បឿនខ្ពស់។ ដើម្បីបង្កើនគុណភាពបណ្ដាញឥតខ្សែអោយបានល្អគួរតែធ្វើការកែលម្អការជ្រើសរើសឆានែលការដាក់ Access Point និងការត្រួតពិនិត្យបណ្ដាញជាប្រចាំ។\n  តាមរយៈការវិភាគលើបន្ទប់ទាំងពីរយើងអាចទាញសន្និដ្ឋានសម្រាប់គម្រោងកែលម្អការគ្រប់គ្រងអ៊ីនធឺណិតនៅក្នុងសាកលវិទ្យាល័យដូចខាងក្រោម៖`,
      items: [
        {
          text:
            `មូលហេតុនៃបញ្ហា : ការរំខានខ្លាំង (High Interference) នៅលើប្រេកង់ 2.4 GHz គឺជាមូលហេតុចម្បងដែលធ្វើឱ្យអ្នកប្រើប្រាស់ត្អូញត្អែរថាអ៊ីនធឺណិតយឺតឬដាច់ៗ។`
        },
        {
          text:
            `យុទ្ធសាស្ត្រកែលម្អ: គួររៀបចំរចនាសម្ព័ន្ធបណ្តាញឡើងវិញ (Redesign hierarchicalnetwork) ដើម្បីគាំទ្រដល់ការប្រើប្រាស់ 5GHz ឱ្យបានពេញលេញ។`
        },
        {
          text: 
            `ការអនុវត្តបច្ចេកទេស: គួរប្រើប្រាស់មុខងារ Band Steering នៅលើឧបករណ៍ AccessPoints ដើម្បីរុញឧបករណ៍អ្នកប្រើប្រាស់ឱ្យទៅប្រើប្រាស់ប្រេកង់ 5GHz ស្វ័យប្រវត្តិ។`
        },
        {
          text:
            `ការគ្រប់គ្រងឆានែល: សម្រាប់តំបន់ដែលចាំបាច់ត្រូវប្រើ 2.4 GHz ត្រូវកំណត់ឆានែលឱ្យនៅដាច់ពីគ្នា(ឧទាហរណ៍ ៖ AP ជិតគ្នាប្រើឆានែលខុសគ្នាដាច់រវាង 1, 6, ឬ 11) ដើម្បីកាត់បន្ថយការជាន់គ្នានៃរលកសញ្ញា។`
        }
      ]
    }
  }
];


  goToRoute(uri_route: string): void {
    this.router.navigate([uri_route]).then(() => window.scrollTo(0, 0));
  }
}
