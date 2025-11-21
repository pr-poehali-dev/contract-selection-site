CREATE TABLE IF NOT EXISTS site_statistics (
    id SERIAL PRIMARY KEY,
    total_visitors INTEGER DEFAULT 0,
    total_applications INTEGER DEFAULT 0,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO site_statistics (total_visitors, total_applications) 
VALUES (147, 23);

CREATE TABLE IF NOT EXISTS visitor_log (
    id SERIAL PRIMARY KEY,
    visitor_ip VARCHAR(100),
    visit_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);