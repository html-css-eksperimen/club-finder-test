import clubs from './clubs';

class DataSource {
    constructor(onSuccess, onFailed) {
        this.onSuccess = onSuccess;
        this.onFailed = onFailed;
    }

    getUrlAPIClub(keyword) {
        const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`;
        return url;
    }

    searchClub(keyword) {
        const filteredClubs = clubs.filter((club) => {
            return club.name.toUpperCase().includes(keyword.toUpperCase());
        });

        if (filteredClubs.length) {
            this.onSuccess(filteredClubs);
        } else {
            const stringFailed = `${keyword} is not found`;
            this.onFailed(stringFailed);
        }
    }

    async searchClubAPI(keyword) {
        // Cari club dengan metode async await
        const urlClubSearch = this.getUrlAPIClub(keyword);
        console.log(urlClubSearch);
        const response = await fetch(urlClubSearch);

        let responseJson = {};
        if (response.status === 200) {
            responseJson = await response.json();
        }

        if (responseJson.teams) {
            return Promise.resolve(responseJson.teams);
        }
        return Promise.reject(new Error(`${keyword} tidak ditemukan`));
    }

    static searchClubsAsync(keyword) {
        return new Promise((resolve, reject) => {
            const filteredClubs = clubs.filter((club) => {
                return club.name.toUpperCase().includes(keyword.toUpperCase());
            });

            if (filteredClubs.length) {
                resolve(filteredClubs);
            } else {
                const stringFailed = `${keyword} is not found`;
                reject(stringFailed);
            }
        });
    }
}

export default DataSource;
