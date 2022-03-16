-- ALTER TABLE feedback ALTER COLUMN total_comments DROP NOT NULL;

-- ALTER TABLE sessions
-- ADD COLUMN expires_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP + INTERVAL '1 day';

-- ALTER TABLE sessions 
-- ALTER COLUMN expires_at SET DEFAULT CURRENT_TIMESTAMP + INTERVAL '1 minute';

-- CREATE VIEW clean_sessions AS DELETE FROM sessions
-- WHERE expires_at < CURRENT_TIMESTAMP;

-- ALTER TABLE feedback
-- RENAME COLUMN tags TO category;

-- ALTER TABLE feedback 
-- ALTER COLUMN category SET DATA TYPE categories;


-- ALTER TABLE feedback 
-- ALTER COLUMN status statuses;

-- DELETE FROM feedback;

-- ALTER TABLE feedback 
-- ALTER COLUMN category TYPE VARCHAR(255);

-- CREATE TYPE categories AS ENUM ('enhancement', 'feature', 'bug');
-- CREATE TYPE statuses AS ENUM ('pending', 'complete', 'in-progress', 'suggestion', 'planned');

-- ALTER TABLE feedback
-- ADD status statuses DEFAULT 'pending';

-- ALTER TABLE feedback
-- ADD category categories;