const axios = require('axios');
class Student {
    home(type) {
        let data = this.getInfo(type, 1)
        return data + 5;
    }

    userId() {
        return 12;
    }

    getInfo(type, status) {
        return 10;
    }

    finalMarks(total) {
        let external = this.getExternal(total);
        let internal = this.getInternal(total);
        let totalSum = external + internal + 10;
        return totalSum;
    }

    getExternal(total) {
        return total + 1;
    }
    getInternal(total) {
        return total - 1;
    }

    dbdata() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(10), 1500);
            // setTimeout(() => resolve(10),10000);
        });
    }

    thirdPartApi() {
        return new Promise((resolve, reject) => {
            axios.get('https://mocki.io/v1/b16263c7-4ed9-462d-a461-5d128020df37')
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
}

module.exports = Student;