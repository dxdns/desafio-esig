package com.kaggle.app.models;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "country_vaccinations")
@Getter
@Setter
public class VaccinationModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String country;
    private String isoCode;
    private Date date;
    private Long totalVaccinations;
    private Long peopleVaccinated;
    private Long peopleFullyVaccinated;
    private Long dailyVaccinationsRaw;
    private Long dailyVaccinations;
    private BigDecimal totalVaccinationsPerHundred;
    private BigDecimal peopleVaccinatedPerHundred;
    private BigDecimal peopleFullyVaccinatedPerHundred;
    private BigDecimal dailyVaccinationsPerMillion;
    private String vaccines;
    private String sourceName;
    private String sourceWebsite;

    public VaccinationModel() {
    }

    public VaccinationModel(String country, String isoCode, Date date, Long totalVaccinations, Long peopleVaccinated,
            Long peopleFullyVaccinated, Long dailyVaccinationsRaw, Long dailyVaccinations,
            BigDecimal totalVaccinationsPerHundred, BigDecimal peopleVaccinatedPerHundred,
            BigDecimal peopleFullyVaccinatedPerHundred, BigDecimal dailyVaccinationsPerMillion,
            String vaccines, String sourceName, String sourceWebsite) {
        this.country = country;
        this.isoCode = isoCode;
        this.date = date;
        this.totalVaccinations = totalVaccinations;
        this.peopleVaccinated = peopleVaccinated;
        this.peopleFullyVaccinated = peopleFullyVaccinated;
        this.dailyVaccinationsRaw = dailyVaccinationsRaw;
        this.dailyVaccinations = dailyVaccinations;
        this.totalVaccinationsPerHundred = totalVaccinationsPerHundred;
        this.peopleVaccinatedPerHundred = peopleVaccinatedPerHundred;
        this.peopleFullyVaccinatedPerHundred = peopleFullyVaccinatedPerHundred;
        this.dailyVaccinationsPerMillion = dailyVaccinationsPerMillion;
        this.vaccines = vaccines;
        this.sourceName = sourceName;
        this.sourceWebsite = sourceWebsite;
    }
}
