package com.example.validation;

import com.example.validation.Controllers.UserController;
import com.example.validation.model.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ApplicationTests {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private UserController userController;

    @Test
    public void contextLoads() {
        // Verifica se o contexto da aplicação carrega corretamente
        Assertions.assertNotNull(userController);
    }

    @Test
    public void testValidationSuccess() {
        User user = new User("username", "Senha@123");
        ResponseEntity<String> response = restTemplate.exchange(
                "http://localhost:" + port + "/validate",
                HttpMethod.POST,
                new HttpEntity<>(user),
                String.class);

        Assertions.assertEquals(200, response.getStatusCodeValue());
        Assertions.assertEquals("Validado", response.getBody());
    }

    @Test
    public void testValidationFailure() {
        // Teste de falha de validação de usuário
        User user = new User("invalidUsername", "invalidPassword");
        ResponseEntity<String> response = restTemplate.exchange(
                "http://localhost:" + port + "/validate",
                HttpMethod.POST,
                new HttpEntity<>(user),
                String.class);

        Assertions.assertEquals(200, response.getStatusCodeValue());
        Assertions.assertEquals("Não Validado", response.getBody());
    }
}
