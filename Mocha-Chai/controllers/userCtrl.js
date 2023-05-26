const userlist = (req, res) => {
    let data = {
        list: 'hello'
    }
    res.status(200).json({ statusText: 'success', data });
}

const newsData = () => {
    return new Promise((resolve, reject) => {
        resolve({ otp: 9000 });
    })
}

module.exports = {
    userlist,
    newsData
};