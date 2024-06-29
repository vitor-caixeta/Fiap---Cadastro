package com.example.validation.controller;

import com.example.validation.model.User;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @PostMapping("/validate")
    public String validateUser(@RequestBody User user) {
        // Imprime os dados recebidos para debug
        System.out.println("Recebido: " + user.getUsername() + ", " + user.getPassword());

        if (isValidPassword(user.getPassword())) {
            return "Validado";
        } else {
            return "Não Validado";
        }
    }

    private boolean isValidPassword(String password) {
        // Exemplo de validação de senha:
        // Deve ter pelo menos 8 caracteres, uma letra maiúscula, um número e um caractere especial
        return password.length() >= 8 &&
                password.matches(".*[A-Z].*") &&
                password.matches(".*\\d.*") &&
                password.matches(".*[@$!%*?&].*");
    }
}
