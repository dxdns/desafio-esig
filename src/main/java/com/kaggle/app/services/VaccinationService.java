package com.kaggle.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.kaggle.app.models.VaccinationModel;
import com.kaggle.app.repositories.VaccinationRepository;

import java.util.List;

@Service
public class VaccinationService {
    @Autowired
    private VaccinationRepository repository;

    public Page<VaccinationModel> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    public List<VaccinationModel> findByCountry(String country) {
        return repository.findByCountry(country);
    }
}
