import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CustomStyle } from '../custom-style/custom-style';
import { Loading } from '../loading/loading';

@Component({
  selector: 'app-slide-show-page',
  standalone: true,
  imports: [CommonModule, CustomStyle, Loading, RouterLink, RouterLinkActive],
  templateUrl: './analize-chanel.html',
  styleUrls: ['./analize-chanel.scss'],
})
export class AnalizeChanel {
  constructor(private router: Router) {}

  // Tool images for the first section
  wifiAnalyzerImage =
    'https://scontent.fpnh18-3.fna.fbcdn.net/v/t39.30808-6/604503368_1415592080195872_653802442218426414_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHHf3rrZjyfZVLfAP1wRuI05tUdhcipgMbm1R2FyKmAxuhtl8-b8GSoS7TynM7m79PfzIqJLW-U9XCsS5p8gvU4&_nc_ohc=JqZozJv3r6EQ7kNvwGLys9v&_nc_oc=Adknz9cIf5N_eqaZm9PUJO5CmSngkxPIqKqvYUmUNwur6qqmSTZKg1-qvBt0BeqlJCQ&_nc_zt=23&_nc_ht=scontent.fpnh18-3.fna&_nc_gid=6TyTfyvMRrHZRXwziB49vA&oh=00_AfknoiUQgIGLN5kOUBxnyhxGd6x8EU0BJ_UQdXtS0FfE9g&oe=69572C4F';
  speedTestImage =
    'https://scontent.fpnh18-4.fna.fbcdn.net/v/t39.30808-6/602376879_1415592170195863_417124200066894444_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEr0lOMvIXzl5BkM5tfSOIFGkp8CI3YOIcaSnwIjdg4h_3lgkt8nmYGppqFXdOMFCSiBCG-dU21_qfzh82Wmb4j&_nc_ohc=B1RNVAtpqcEQ7kNvwHeNo7m&_nc_oc=Adn2QpDouiEFa2mxm7cnhI4t6PHZ46_eKU9Gp_4A9o-PRCnRDYI3Fo7sCNvOSfNWFiE&_nc_zt=23&_nc_ht=scontent.fpnh18-4.fna&_nc_gid=0-eHBy-UfVmln3aQSQ8NCA&oh=00_Afkh6JdUhfFAg3hTWm5x23qgkX_Zyunmk4kupWHNjv-w1Q&oe=6957123F';

  // Sections
  sections = [
    {
      title: '1. ការវិភាគលើឆានែល និងប្រេកង់&room 110',
      description:
        'ផ្អែកលើរូបភាពខាងក្រោម យើងសង្កេតឃើញស្ថានភាពនៃរលកសញ្ញា ដូចខាងក្រោម៖',
      bullets: ['ការធ្វើវិភាគស្ថិតនៅក្នុងបន្ទប់110'],
      showTopImages: true, // flag to show two images at the top
    },
    {
      title: '2. Frequency 2.4GHz - ការរំខានសញ្ញា',
      description:
        'ការវិភាគលើប្រេកង់ 2.4GHz បង្ហាញពីបញ្ហាការរំខានសញ្ញាដូចខាងក្រោម៖',
      image:
        'https://scontent.fpnh18-4.fna.fbcdn.net/v/t39.30808-6/603895825_1415592076862539_8732348987315866084_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFQoP2d_NvAhUFtI0XpCHBG0p6JG0qLeiXSnokbSot6JaB-sT0-SJ5aPcksJDk7jGDB-hh5pRGSC_Ov0tdSTYd4&_nc_ohc=cg7ryTRS0YMQ7kNvwEC82jk&_nc_oc=AdkMvWMcTT2yHIAd8Nd0paQYAfzBgM5h9QVK4yJCL-TMDhjPDQVxyyrvvTpnCR9eKZw&_nc_zt=23&_nc_ht=scontent.fpnh18-4.fna&_nc_gid=Zu_du03danHvvQ_7E549MA&oh=00_AfkcKUxBPiGe2fFrIUtKRF90LoeVCQQW3SFBkv8vx852zA&oe=695711F3',
      bullets: [
        `ការត្រួតស៊ីគ្នា នៃឆានែល(Channel Overlapping):បណ្ដាញជាច្រើនប្រើឆានែល1,2,3និង6 ដែលបណ្ដាលឲ្យរលកសញ្ញាត្រួតស៊ីគ្នាយ៉ាងខ្លាំង។ 
        ទោះបីជាឆានែល1,6និង11ជាឆានែលដែលមិនត្រួតស៊ីគ្នាក៏ដោយ ប៉ុន្តែក្នុងស្ថានភាពនេះ Access Point ជាច្រើនកំពុងប្រើឆានែលដូចគ្នា ឬឆានែលជិតគ្នាដែលបង្កឲ្យមាន Co-channel Interference និង Adjacent-channelInterference។`,
        `កម្លាំងនៃការរំខាន (Interference): មានរលកសញ្ញាខ្លាំងមួយចំនួនដែលមានកម្លាំងប្រហែលពី -40dBm ដល់ -60dBm ត្រួតស៊ីគ្នាជាមួយរលកសញ្ញាខ្សោយៗជាច្រើន(-70dBmដល់-90dBm)។ 
        ការត្រួតស៊ីគ្នានេះបង្កឲ្យមានការរំខានខ្លាំងនិងធ្វើឲ្យប្រសិទ្ធភាពបណ្ដាញធ្លាក់ចុះ។`,
      ],
      impacts: {
        title: 'ផលប៉ះពាល់:',
        items: [
          'ល្បឿនអ៊ីនធឺណិតមិនស្ថេរភាព',
          'Latency កើនឡើង',
          'Packet Loss កើតមានញឹកញាប់',
          'បទពិសោធន៍អ្នកប្រើប្រាស់មិនល្អនៅពេលមានអ្នកប្រើប្រាស់ច្រើន។',
        ],
      },
    },
    {
      title: '3. Frequency 5GHz - ការវិភាគ',
      description:
        `ការវិភាគលើប្រេកង់ 5GHz បង្ហាញពីស្ថានភាពដូចខាងក្រោម៖ 
        បណ្តាញ 5GHz ពីក្រាហ្វ WiFi Analyzerអាចឃើញថា Access Point ត្រូវបានបែងចែកលើឆានែលជាច្រើនដូចជា 36, 40, 44, 48, 108, 149, 157 និង 161។៖`,
      image:
        'https://scontent.fpnh18-4.fna.fbcdn.net/v/t39.30808-6/607107768_1415592066862540_300068367396661200_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE0bL5sEFEl09AlEY_bfLEHuFD5JPkb3l64UPkk-RveXu0Y-IXgU-jv9I3dLqIYTELihQPklWD47bdb1Gzlg_8F&_nc_ohc=ed07YzZtflgQ7kNvwEl3RXt&_nc_oc=AdmwBnSNKeajXFB6dfhffYlQJ8fXutT4sNQaHGAMNuf-kYnYaPMgTtP0AOcEl7bCP-4&_nc_zt=23&_nc_ht=scontent.fpnh18-4.fna&_nc_gid=uYqlB6KLmtuaw59zhzFi-Q&oh=00_AflNeuCNQQ494f7PRHYvEK5GyyxmUbkeldYAQFCVFAVlww&oe=695725D9',
      bullets: [
        `ការត្រួតស៊ីគ្នា នៃឆានែល (Channel Overlapping): ការត្រួតស៊ីគ្នានៃឆានែលនៅលើប្រេកង់5GHz មានតិចជាង 2.4GHz ដោយសារតែមានឆានែលច្រើននិងការបែងចែកឆានែលបានល្អជាង។ 
        Overlapping មានត្រឹមតែបន្តិចនៅក្រុមឆានែល 36–48 ប៉ុណ្ណោះ។`,
        `កម្លាំងនៃការរំខាន (Interference): កម្លាំងសញ្ញាសរុបស្ថិតនៅចន្លោះ -65dBm ដល់-85dBm ហើយមិនមានរលកសញ្ញាខ្លាំងៗជាច្រើនត្រួតស៊ីគ្នាដូចជា 2.4GHz ទេ។ 
        នេះបង្ហាញថាInterference នៅលើប្រេកង់ 5 GHz មានកម្រិតទាប។`,
      ],
    },
  ];

  goToRoute(uri_route: string): void {
    this.router.navigate([uri_route]).then(() => window.scrollTo(0, 0));
  }
}
