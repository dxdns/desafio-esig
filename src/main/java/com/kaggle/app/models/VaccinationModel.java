package com.kaggle.app.models;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "country_vaccinations")
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

    // Getters e Setters
    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getIsoCode() {
        return isoCode;
    }

    public void setIsoCode(String isoCode) {
        this.isoCode = isoCode;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Long getTotalVaccinations() {
        return totalVaccinations;
    }

    public void setTotalVaccinations(Long totalVaccinations) {
        this.totalVaccinations = totalVaccinations;
    }

    public Long getPeopleVaccinated() {
        return peopleVaccinated;
    }

    public void setPeopleVaccinated(Long peopleVaccinated) {
        this.peopleVaccinated = peopleVaccinated;
    }

    public Long getPeopleFullyVaccinated() {
        return peopleFullyVaccinated;
    }

    public void setPeopleFullyVaccinated(Long peopleFullyVaccinated) {
        this.peopleFullyVaccinated = peopleFullyVaccinated;
    }

    public Long getDailyVaccinationsRaw() {
        return dailyVaccinationsRaw;
    }

    public void setDailyVaccinationsRaw(Long dailyVaccinationsRaw) {
        this.dailyVaccinationsRaw = dailyVaccinationsRaw;
    }

    public Long getDailyVaccinations() {
        return dailyVaccinations;
    }

    public void setDailyVaccinations(Long dailyVaccinations) {
        this.dailyVaccinations = dailyVaccinations;
    }

    public BigDecimal getTotalVaccinationsPerHundred() {
        return totalVaccinationsPerHundred;
    }

    public void setTotalVaccinationsPerHundred(BigDecimal totalVaccinationsPerHundred) {
        this.totalVaccinationsPerHundred = totalVaccinationsPerHundred;
    }

    public BigDecimal getPeopleVaccinatedPerHundred() {
        return peopleVaccinatedPerHundred;
    }

    public void setPeopleVaccinatedPerHundred(BigDecimal peopleVaccinatedPerHundred) {
        this.peopleVaccinatedPerHundred = peopleVaccinatedPerHundred;
    }

    public BigDecimal getPeopleFullyVaccinatedPerHundred() {
        return peopleFullyVaccinatedPerHundred;
    }

    public void setPeopleFullyVaccinatedPerHundred(BigDecimal peopleFullyVaccinatedPerHundred) {
        this.peopleFullyVaccinatedPerHundred = peopleFullyVaccinatedPerHundred;
    }

    public BigDecimal getDailyVaccinationsPerMillion() {
        return dailyVaccinationsPerMillion;
    }

    public void setDailyVaccinationsPerMillion(BigDecimal dailyVaccinationsPerMillion) {
        this.dailyVaccinationsPerMillion = dailyVaccinationsPerMillion;
    }

    public String getVaccines() {
        return vaccines;
    }

    public void setVaccines(String vaccines) {
        this.vaccines = vaccines;
    }

    public String getSourceName() {
        return sourceName;
    }

    public void setSourceName(String sourceName) {
        this.sourceName = sourceName;
    }

    public String getSourceWebsite() {
        return sourceWebsite;
    }

    public void setSourceWebsite(String sourceWebsite) {
        this.sourceWebsite = sourceWebsite;
    }
}
