let fakeData = [];

for(let i=1; i < 50; i++) {
    let newUser = {
        id: i,
        email: `leffler.karelle${i}@marcellus.net`,
        firstName: 'Lewis',
        lastName: 'Taylor',
        country: 'Korea',
        company: 'green',
        type: 'Business',
        level: 12,
        validated: true,
        coins: Math.floor(Math.random() * 5000),
        subcriptionType: 99,
        subscriptionDate: '11/02/2016'
    }
    fakeData.push(newUser)
}

export default fakeData;