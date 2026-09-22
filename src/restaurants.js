import resImg1 from './assets/photos/restaurant1.jpg';
import resImg2 from './assets/photos/restaurant2.jpg';
import resImg3 from './assets/photos/restaurant3.png';

const restaurants = [
    {
        id: 1,
        name: 'The Great Foods',
        type: 'Fast Food',
        startTime: '08:00',
        endTime: '21:00',
        description: 'Lorem ipsum.',
        address: {
            country: 'Iran',
            city: 'Karaj',
            street: 'Bahar',
        },
        averageRating: {
            food: 2,
            service: 3,
            ambiance: 4,
            overall: 2,
        },
        maxSeatsNumber: 6,
        starCount: 2,
        managerUsername: 'Misagh',
        image: resImg1,
        totalReviews: 1,
    },

    {
        id: 2,
        name: 'The Best Foods',
        type: 'Sea Food',
        startTime: '08:00',
        endTime: '23:00',
        description: 'Lorem ipsum.',
        address: {
            country: 'Iran',
            city: 'Tehran',
            street: 'Darroos',
        },
        averageRating: {
            food: 4,
            service: 3,
            ambiance: 5,
            overall: 3,
        },
        maxSeatsNumber: 8,
        starCount: 3,
        managerUsername: 'Misagh',
        image: resImg2,
        totalReviews: 0,
    },

    {
        id: 3,
        name: 'The Better Foods',
        type: 'Fast Food',
        startTime: '07:00',
        endTime: '22:00',
        description: 'Lorem ipsum.',
        address: {
            country: 'Iran',
            city: 'Tehran',
            street: 'Tajrish',
        },
        averageRating: {
            food: 1,
            service: 2,
            ambiance: 3,
            overall: 4,
        },
        maxSeatsNumber: 12,
        starCount: 4,
        managerUsername: 'Misagh',
        image: resImg3,
        totalReviews: 0,
    }];

export default restaurants;