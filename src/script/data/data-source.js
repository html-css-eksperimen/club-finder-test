import clubs from './clubs';

class DataSource {
    constructor(onSuccess, onFailed) {
        this.onSuccess = onSuccess;
        this.onFailed = onFailed;
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
