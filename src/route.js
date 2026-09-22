import Home from './pages/Home'
import Customer from './pages/Customer';
import Restaurant from './pages/Restaurant';


const routeArray = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/customer',
        element: <Customer />
    },
    {
        path: '/restaurant/:id',
        element: <Restaurant />
    }

];

export { routeArray };