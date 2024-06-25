# Iara Games User Registration API

## Descrição
Esta API permite o cadastro de usuários no site da Iara Games. A API valida e armazena os dados dos usuários de forma segura.

## Tecnologias Utilizadas
- Java
- Spring Boot
- MySQL

## Endpoints
### Cadastro de Usuário
`POST /api/users/register`
- Request Body:
```json
{
    "name": "Nome do Usuário",
    "email": "email@exemplo.com",
    "password": "senha123"
}
