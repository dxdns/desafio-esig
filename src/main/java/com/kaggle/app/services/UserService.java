package com.kaggle.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.kaggle.app.dto.RegisterDTO;
import com.kaggle.app.models.UserModel;
import com.kaggle.app.repositories.UserRepository;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository repository;

    public UserModel add(RegisterDTO registerDto) {
        if (repository.findByLogin(registerDto.getUsername()) != null) {
            return null;
        }
        String encryptedPassword = new BCryptPasswordEncoder().encode(registerDto.getPassword());
        UserModel newUser = new UserModel(registerDto.getUsername(), encryptedPassword);
        repository.save(newUser);
        return newUser;
    }

    public List<UserModel> findAll() {
        return repository.findAll();
    }
}

