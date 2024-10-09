# Projeto Kaggle

Este projeto foi desenvolvido como parte do desafio da ESIG.

## Descrição

O aplicativo Kaggle é uma ferramenta interativa que permite aos usuários visualizar e analisar dados relacionados à vacinação contra a COVID-19. Utilizando o dataset disponível em [Our World in Data](https://ourworldindata.org/covid-vaccinations), o aplicativo oferece uma interface intuitiva para explorar informações sobre taxas de vacinação, cobertura por país, e tendências ao longo do tempo. 

Os usuários podem filtrar e comparar dados de diferentes países, proporcionando uma visão abrangente do progresso da vacinação global e permitindo uma análise mais profunda sobre a eficácia das campanhas de vacinação em diversas regiões do mundo.

## Tecnologias Utilizadas

- **Java 11**
- **Spring Boot**
- **Spring Boot Security (JWT)**
- **Lombok**
- **Angular 11**
- **PostgreSQL**

## Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto localmente:

### Backend

1. Clone o repositório:
    ```bash
    git clone <URL do repositório>
    ```

2. Configure o banco de dados PostgreSQL:
    - Crie um banco de dados e configure as credenciais no arquivo `application.properties`.

3. Migrando os dados com docker
    ```bash
    docker cp src/main/resources/db/migration/[filename].sql [container_id]:/tmp/[filename].sql
    ```
    ```bash
    docker exec -it [container_id] bash
    ```
    ```bash
    psql -U myuser -d mydb -f /tmp/[filename].sql
    ```

4. Execute o projeto:
    ```bash
    ./mvnw spring-boot:run
    ```

### Frontend

1. Navegue até o diretório do projeto frontend:
    ```bash
    cd frontend
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:
    ```bash
    ng serve
    ```


    