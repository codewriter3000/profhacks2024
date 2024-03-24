import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('src/profhacks2024-db/db.sqlite', sqlite3.OPEN_READWRITE, err => {
    if (err) {
        console.log(err.message)
    } else {
        console.log('db connection successful')
    }
})

const processQuery = (query, params = []) => {
    return new Promise((resolve, reject) => {
        db.all(query, params, (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
}

export const getCounties = () => processQuery('SELECT * FROM nj_counties;');

export const getMunicipalities = () => processQuery('SELECT * FROM nj_municipalities;');

export const getWaterQualityTestingInfo = () => processQuery('SELECT * FROM NJDEP_Beach_Data_2024_03_23;');

export const getShoreTowns = () => processQuery('SELECT DISTINCT mun.* FROM nj_municipalities AS mun INNER JOIN NJDEP_Beach_Data_2024_03_23 AS beach ON mun.municipality_code = beach.municipality_code;');

export const getShoreCounties = () => processQuery('SELECT DISTINCT cou.* FROM nj_counties AS cou INNER JOIN NJDEP_Beach_Data_2024_03_23 AS beach ON cou.county_code = beach.county_code;');

export const getMunicipalityCode = (name) => processQuery('SELECT * FROM nj_municipalities WHERE municipality_code = ?;', [name])

export const getWaterQualityTestingInfoForCode = (code) => processQuery('SELECT * FROM NJDEP_Beach_Data_2024_03_23 WHERE municipality_code = ?;', [code])