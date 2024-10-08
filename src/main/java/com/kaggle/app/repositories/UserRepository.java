package com.kaggle.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import com.kaggle.app.models.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {
    UserDetails findByLogin(String login);
}
