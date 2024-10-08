import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js-dist-min';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  private apiUrl = 'http://localhost:8081/vaccinations';
  selectedCountry: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchData()
  }

  fetchData(page: number = 0, size: number = 10) {
    this.http.get<VaccinationData[]>(`${this.apiUrl}?page=${page}&size=${size}`).subscribe(data => {
      this.createChart(data);
    }, error => {
      console.error('Erro ao buscar dados:', error);
    });
  }

  createChart(vaccinationData: VaccinationData[]) {
    const countries = vaccinationData.map(item => item.country); // Extraindo os países
    const totalVaccinations = vaccinationData.map(item => item.total_vaccinations); // Extraindo as vacinações totais

    const data = [
      {
        x: countries,
        y: totalVaccinations,
        type: 'bar'
      }
    ];

    const layout = {
      title: `Total de Vacinações em ${this.selectedCountry}`,
      xaxis: {
        title: 'País'
      },
      yaxis: {
        title: 'Total de Vacinações'
      }
    };

    Plotly.newPlot('myDiv', data as Plotly.Data[], layout);
  }
}

export interface VaccinationData {
  id: number;
  country: string;
  iso_code: string;
  date: string;
  total_vaccinations: number;
  people_vaccinated: number;
  people_fully_vaccinated: number;
  daily_vaccinations_raw: number;
  daily_vaccinations: number;
  total_vaccinations_per_hundred: number;
  people_vaccinated_per_hundred: number;
  people_fully_vaccinated_per_hundred: number;
  daily_vaccinations_per_million: number;
  vaccines: string;
  source_name: string;
  source_website: string;
}
