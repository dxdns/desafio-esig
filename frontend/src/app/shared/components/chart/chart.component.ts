import { Component, OnInit } from "@angular/core"
import * as Plotly from "plotly.js-dist-min"
import { HttpClient } from "@angular/common/http"

@Component({
    selector: "app-chart",
    templateUrl: "./chart.component.html",
    styleUrls: ["./chart.component.css"],
})
export class ChartComponent implements OnInit {
    private apiUrl = "http://localhost:8081/vaccinations"
    countries: string[] = []
    selectedCountries: string[] = []
    private vaccinationData: VaccinationData[] = []
    private filteredData: VaccinationData[] = []

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.fetchData()
    }

    fetchData(page: number = 0, size: number = 99999) {
        this.http
            .get<any>(`${this.apiUrl}?page=${page}&size=${size}`)
            .subscribe(
                (data) => {
                    const obj = data.content as VaccinationData[]
                    this.vaccinationData = obj
                    this.filteredData = obj
                    this.createChart()
                    this.countries = Array.from(
                        new Set(obj.map((item) => item.country))
                    )
                },
                (error) => {
                    console.error("Erro ao buscar dados:", error)
                }
            )
    }

    createChart() {
        const dates = this.filteredData.map((item) => item.date)
        const totalVaccinations = this.filteredData.map(
            (item) => item.totalVaccinations
        )
        const dailyVaccinationsPerMillion = this.filteredData.map(
            (item) => item.dailyVaccinationsPerMillion
        )

        const totalVaccinationTrace = {
            x: dates,
            y: totalVaccinations,
            type: "bar",
            name: "Total de Vacinações",
            opacity: 0.6,
            marker: {
                color: "blue",
            },
        }

        const dailyVaccinationTrace = {
            x: dates,
            y: dailyVaccinationsPerMillion,
            mode: "lines",
            name: "Vacinações Diárias por Milhão",
            line: {
                color: "orange",
                width: 2,
            },
        }

        const data = [totalVaccinationTrace, dailyVaccinationTrace]

        const layout: Partial<Plotly.Layout> = {
            title: `Dados de Vacinação para ${this.selectedCountries.length > 0 ? this.selectedCountries.join(", ") : "todos os países"}`,
            xaxis: {
                type: "date",
                tickformat: "%d-%m-%Y",
            },
            yaxis: {
                title: "Número de Vacinações",
                titlefont: { size: 20 },
            },
            legend: {
                x: 0,
                y: 1,
                traceorder: "normal",
                orientation: "h",
            },
        }

        Plotly.newPlot("myDiv", data as any, layout)
    }

    toggleCountry(country: string) {
        const index = this.selectedCountries.indexOf(country)
        if (index === -1) {
            this.selectedCountries.push(country)
        } else {
            this.selectedCountries.splice(index, 1)
        }

        this.filterData()
    }

    filterData() {
        if (this.selectedCountries.length > 0) {
            this.filteredData = this.vaccinationData.filter((item) =>
                this.selectedCountries.includes(item.country)
            )
        } else {
            this.filteredData = this.vaccinationData
        }
        this.createChart()
    }
}

export interface VaccinationData {
    id: number
    country: string
    isoCode: string
    date: string
    totalVaccinations: number
    peopleVaccinated: number
    peopleFullyVaccinated: number
    dailyVaccinationsRaw: number
    dailyVaccinations: number
    totalVaccinationsPerHundred: number
    peopleVaccinatedPerHundred: number
    peopleFullyVaccinatedPerHundred: number
    dailyVaccinationsPerMillion: number
    vaccines: string
    sourceName: string
    sourceWebsite: string
}
