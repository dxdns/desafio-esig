CREATE TABLE country_vaccinations (
    id SERIAL PRIMARY KEY,
    country VARCHAR(255),
    iso_code VARCHAR(10),
    date DATE,
    total_vaccinations BIGINT,
    people_vaccinated BIGINT,
    people_fully_vaccinated BIGINT,
    daily_vaccinations_raw BIGINT,
    daily_vaccinations BIGINT,
    total_vaccinations_per_hundred DECIMAL(5, 2),
    people_vaccinated_per_hundred DECIMAL(5, 2),
    people_fully_vaccinated_per_hundred DECIMAL(5, 2),
    daily_vaccinations_per_million DECIMAL(10, 2),
    vaccines TEXT,
    source_name VARCHAR(255),
    source_website TEXT
);
