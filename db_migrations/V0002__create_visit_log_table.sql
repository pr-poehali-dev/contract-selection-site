CREATE TABLE IF NOT EXISTS visit_log (
    id SERIAL PRIMARY KEY,
    visited_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_visit_log_visited_at ON visit_log (visited_at);