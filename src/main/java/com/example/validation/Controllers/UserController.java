package com.example.validation.Controllers;

import com.example.validation.model.User;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @PostMapping("/validate")
    public String validateUser(@RequestBody User user) {
        System.out.println("Recebido: " + user.getUsername() + ", " + user.getPassword());

        if (isValidPassword(user.getPassword())) {
            return "Validado";
        } else {
            return "Não Validado";
        }
    }

    private boolean isValidPassword(String password) {
        // Verifica se a senha tem pelo menos 8 caracteres
        if (password.length() < 8) return false;

        // Verifica se contém pelo menos uma letra maiúscula
        if (!password.chars().anyMatch(Character::isUpperCase)) return false;

        // Verifica se contém pelo menos um número
        if (!password.chars().anyMatch(Character::isDigit)) return false;

        // Verifica se contém pelo menos um caractere especial
        String specialChars = "[@$!%*?&]";
        if (!password.matches(".*[" + specialChars + "].*")) return false;

        return true; // Senha válida
    }
}
