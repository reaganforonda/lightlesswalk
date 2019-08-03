DROP TABLE IF EXISTS property;

CREATE TABLE property (
    property_id SERIAL PRIMARY KEY,
    property_name VARCHAR(45),
    mri_prop_id VARCHAR(8)
);

