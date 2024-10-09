import { Component, Input, OnChanges, SimpleChanges } from "@angular/core"
import * as Plotly from "plotly.js-dist-min"
import { VaccinationData } from "src/app/pages/home/home.component"

@Component({
    selector: "app-chart",
    templateUrl: "./chart.component.html",
    styleUrls: ["./chart.component.css"],
})
export class ChartComponent implements OnChanges {
    @Input() selectedCountries: string[] = []
    @Input() filteredData: VaccinationData[] = []

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.filteredData && this.filteredData.length > 0) {
            this.createChart(this.filteredData)
        }
    }

    createChart(filteredData: VaccinationData[]) {
        const dates = filteredData.map((item) => item.date)
        const totalVaccinations = filteredData.map(
            (item) => item.totalVaccinations
        )
        const dailyVaccinationsPerMillion = filteredData.map(
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
}
