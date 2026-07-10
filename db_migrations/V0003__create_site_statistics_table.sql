CREATE TABLE IF NOT EXISTS site_statistics (
    id SERIAL PRIMARY KEY,
    total_visitors INTEGER NOT NULL DEFAULT 0,
    total_applications INTEGER NOT NULL DEFAULT 0,
    last_updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO site_statistics (id, total_visitors, total_applications)
SELECT 1, 0, 0
WHERE NOT EXISTS (SELECT 1 FROM site_statistics WHERE id = 1);