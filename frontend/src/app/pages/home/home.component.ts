import { HttpClient } from "@angular/common/http"
import { Component, OnInit } from "@angular/core"

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
    private apiUrl = "http://localhost:8081/vaccinations"
    vaccinationData: VaccinationData[] = []
    filteredData: VaccinationData[] = []
    countries: string[] = []
    selectedCountries: string[] = []

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.fetchData()
    }

    fetchData(page: number = 0, size: number = 999) {
        this.http
            .get<any>(`${this.apiUrl}?page=${page}&size=${size}`)
            .subscribe(
                (data) => {
                    const obj = data.content as VaccinationData[]
                    this.vaccinationData = obj
                    this.filteredData = obj
                    this.countries = Array.from(
                        new Set(obj.map((item) => item.country))
                    )
                },
                (error) => {
                    console.error("Erro ao buscar dados:", error)
                }
            )
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
