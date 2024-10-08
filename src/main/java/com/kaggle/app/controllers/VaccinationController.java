package com.kaggle.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kaggle.app.models.VaccinationModel;
import com.kaggle.app.services.VaccinationService;

@RestController
@RequestMapping("/vaccinations")
public class VaccinationController {
    @Autowired
    private VaccinationService vaccinationService;

    @GetMapping
    public ResponseEntity<?> GetAll(@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        var vaccinations = vaccinationService.findAll(PageRequest.of(page, size));
        return ResponseEntity.ok(vaccinations);
    }

    @GetMapping("/{country}")
    public ResponseEntity<List<VaccinationModel>> getByCountry(@PathVariable String country) {
        var vaccinations = vaccinationService.findByCountry(country);
        return ResponseEntity.ok(vaccinations);
    }
}
