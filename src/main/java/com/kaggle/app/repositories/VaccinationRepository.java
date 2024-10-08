package com.kaggle.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kaggle.app.models.VaccinationModel;

@Repository
public interface VaccinationRepository extends JpaRepository<VaccinationModel, Long> {
    List<VaccinationModel> findByCountry(String country);
}
