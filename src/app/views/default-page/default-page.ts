import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { Loading } from '../loading/loading';
import { ScannerLoading } from '../scanner-loading/scanner-loading';
interface CoverPageData {
  logo: string;
  countryName: string;
  motto: string;
  faculty: string;
  university_eng: string;
  university_khmer : string;
  department_eng: string;
  department_kh: string;
  course: string;
  assignment: string;
  group: string;
  year: number;
  memberCount: number;
  room: string;
  day: string;
  academicYear: string;
  members: string[];
  grade: string;
  dr : string;
}


interface Member {
  id: number;
  name: string;
}

@Component({
  selector: 'app-default-page',
  imports: [CommonModule,RouterOutlet,Loading,ScannerLoading],
  templateUrl: './default-page.html',
  styleUrl: './default-page.scss',
})
export class DefaultPage {
   constructor(private router: Router) {}

  protected readonly title = signal('RUPP Cover Page');
  protected readonly coverPageData = signal<CoverPageData>({
    logo: 'https://rupp.edu.kh/images/rupp-logo.png',
    countryName: 'ព្រះរាជាណាចក្រកម្ពុជា',
    motto: 'ជាតិ សាសនា ព្រះមហាក្សត្រ',
    faculty: 'Faculty of Science',
    university_eng: 'Royal University of Phnom Penh',
    university_khmer:'សាកល វិទ្យាល័យ ភូមិន្ទភ្នំពេញ',
    department_eng: 'Department of Computer Science',
    department_kh: 'ដេប៉ាតេម៉ង់​ ៖​ ព័ត៍មានវិទ្យា',
    dr : 'សាស្ត្រាចារ្យរង​ បណ្ឌិត អ៊ុក ឃាន',
    course: 'Computer Network',
    assignment: 'Assignment Case Study On RUPP Wireless',
    grade: 'E2',
    group :'5',
    year: 3,
    memberCount: 10,
    room: '110',
    day: '30/12/2025',
    academicYear: '2025 - 2026',
    members: [
      'ណាំ តុលា',
      'តែម​ លៀបហេង',
      'ជ្រុន ម៉ៃ',
      'ជួប ស្រីខួច',
      'ជ្រឺង លីនដា',
      'ដា ភក្តី',
      'តួ​ ផានាត',
      'កាំង ស្រីណែត',
      'ណៃ​​ ហ្គិចហួយ',
      'ភាព​ សេងឃា'
    ]
  });

  members: Member[] = [
    { id: 24, name: 'ណាំ តុលា' },
    { id: 33, name: 'តែម​ លៀបហេង' },
    { id: 15, name: 'ជ្រុន ម៉ៃ' },
    { id: 12, name: 'ជួប ស្រីខួច' },
    { id: 14, name: 'ជ្រឺង លីនដា' },
    { id: 21, name: 'ដា ភក្តី' },
    { id: 31, name: 'តួ​ ផានាត' },
    { id: 1, name: 'កាំង ស្រីណែត' },
    { id: 26, name: 'ណៃ​​ ហ្គិចហួយ' },
    { id: 41, name: 'ភាព​ សេងឃា' }
  ];


  goToRoute(uri_route: string) {
    this.router.navigate([uri_route])
      .then(() => window.scrollTo(0, 0))
      .catch(err => console.error('Navigation Error:', err));
  }

}
