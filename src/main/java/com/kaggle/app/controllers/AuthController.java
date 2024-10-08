package com.kaggle.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kaggle.app.dto.LoginDTO;
import com.kaggle.app.dto.RegisterDTO;
import com.kaggle.app.models.UserModel;
import com.kaggle.app.security.JwtUtil;
import com.kaggle.app.services.UserService;

@RestController
@RequestMapping("auth")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserService userService;
    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDTO loginDto) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(loginDto.getUsername(),
                loginDto.getPassword());
        var auth = this.authenticationManager.authenticate(usernamePassword);
        var token = jwtUtil.generateToken((UserModel) auth.getPrincipal());
        return ResponseEntity.ok(token);
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterDTO registerDto) {
        var newUser = userService.add(registerDto);
        return ResponseEntity.ok(newUser);
    }
}
