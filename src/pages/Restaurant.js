import '../assets/styles/restaurantPage/restaurant.css';
import { useParams } from "react-router-dom";
import Header from '../components/pageLayouts/Header'
import Footer from '../components/pageLayouts/Footer';
import restaurants from "../restaurants";
import Information from "../components/restaurantPage/Information";
import ReserveTable from "../components/restaurantPage/ReserveTable";
import Rating from "../components/restaurantPage/Rating";
import AddReview from "../components/restaurantPage/AddReview";
import reviews from "../reviews";
import Reviews from '../components/restaurantPage/Reviews';

function Restaurant() {
    const id = useParams().id;
    return (  
        <div className="d-flex flex-column min-vh-100">
            <Header name="javad"/>
            <div className="pageBody">
                <div className="d-flex">
                    <Information id={id} restaurants={restaurants} />
                    <ReserveTable id={id} restaurants={restaurants} />
                </div>
                <Rating id={id} restaurants={restaurants} />
                <AddReview reviews={reviews} id={id} restaurants={restaurants} />
                <Reviews reviews={reviews} />
            </div>    
            <Footer />
        </div>
    );
}

export default Restaurant;