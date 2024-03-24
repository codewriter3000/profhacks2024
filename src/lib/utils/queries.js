import sqlite3 from 'sqlite3'

const db = await new sqlite3.Database('src/profhacks2024-db/db.sqlite', sqlite3.OPEN_READWRITE, err => {
    if (err) {
        console.log(err.message)
    } else {
        console.log('db connection successful')
    }
})

export const getCounties = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM nj_counties;', (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
};

export const getMunicipalities = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM nj_municipalities;', (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        })
    })
}

export const getWaterQualityTestingInfo = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM NJDEP_Beach_Data_2024_03_23;', (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        })
    })
}

export const getShoreTowns = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT DISTINCT mun.* FROM nj_municipalities AS mun INNER JOIN NJDEP_Beach_Data_2024_03_23 AS beach ON mun.municipality_code = beach.municipality_code;', (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        })
    })
}

export const getShoreCounties = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT DISTINCT cou.* FROM nj_counties AS cou INNER JOIN NJDEP_Beach_Data_2024_03_23 AS beach ON cou.county_code = beach.county_code;', (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        })
    })
}