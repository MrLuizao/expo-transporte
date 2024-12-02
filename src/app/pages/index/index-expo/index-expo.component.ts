import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar/navbar/navbar.component";
import { TeamOneComponent } from "../../../components/team/team-one/team-one.component";
import { CountUpModule } from 'ngx-countup';
import { EventTabComponent } from "../../../components/tab/event-tab/event-tab.component";
import { PricingTwoComponent } from "../../../components/pricing/pricing-two/pricing-two.component";
import { BlogOneComponent } from "../../../components/blog/blog-one/blog-one.component";
import { FooterTwoComponent } from "../../../components/footer/footer-two/footer-two.component";
import { SponsorsLineComponent } from '../../../components/sponsors-line/sponsors-line.component';
import { RegistryService } from '../../../services/registry.service';

interface EventProcess{
  icon: string;
  title: string;
  desc: string;
  bar: boolean;
}

@Component({
  selector: 'app-index-expo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    NavbarComponent,
    TeamOneComponent,
    CountUpModule,
    EventTabComponent,
    PricingTwoComponent,
    BlogOneComponent,
    FooterTwoComponent,

    SponsorsLineComponent,
],
  templateUrl: './index-expo.component.html',
  styleUrl: './index-expo.component.scss'
})

export class IndexExpoComponent {

  formData = {
    empresa: '',
    contacto: '',
    telefono: '',
    email: ''
  };

  countdownDate: Date = new Date('March 14, 2025 0:0:0');
  days: number = 0
  hours: number = 0
  minutes: number =0
  seconds: number = 0

  constructor( private registryService: RegistryService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.calculateTime();
    }, 1000);
  }
  calculateTime() {
    const now = new Date().getTime();
    const difference = this.countdownDate.getTime() - now;
    this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
  }

  eventProcess:EventProcess[] = [
    {
      icon:'uil uil-ankh',
      title:'Conferences',
      desc:'Write a short description, that will describe Starty the title or something informational and useful.',
      bar:true
    },
    {
      icon:'uil uil-airplay',
      title:'Webinars',
      desc:'Write a short description, that will describe Starty the title or something informational and useful.',
      bar:true
    },
    {
      icon:'uil uil-user',
      title:'Virtual Classes',
      desc:'Write a short description, that will describe Starty the title or something informational and useful.',
      bar:false
    },
  ]

  counterData = [
    {
      target:12,
      title:'SPEAKERS'
    },
    {
      target:18,
      title:'SPONSORS'
    },
    {
      target:8,
      title:'WORKSHOPS'
    },
  ]

  isOpen:any = false;

  togggleModal(e:any){
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }

  navigateToRegistry(){

    let sectionId = document.getElementById('formSection');
    console.log(sectionId);

    sectionId?.scrollIntoView({behavior: 'smooth'})
    
    // document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });
  }

  loading = false;
  showToast = false;
  toastTitle = '';
  toastMessage = '';

  onSubmit() {
    this.loading = true;
    console.log(this.formData);
    this.registryService.sendContactData(this.formData).subscribe(
      (response) => {
        console.log('Datos enviados correctamente', response);
        this.formData = {
          empresa: '',
          contacto: '',
          telefono: '',
          email: ''
        };
        this.loading = false;

        this.showToastMessage('Registro exitoso', 'Pronto nos pondremos en contacto');

      },
      (error) => {
        console.error('Error al enviar los datos', error);
        this.loading = false;

        this.showToastMessage('Error', 'Error al enviar los datos');

        alert('Error al enviar los datos');
      }
    );
  }

  showToastMessage(title: string, message: string) {
    this.toastTitle = title;
    this.toastMessage = message;
    this.showToast = true;

    setTimeout(() => this.hideToast(), 5000);
  }

  hideToast() {
    this.showToast = false;
  }

}
