import Header from '../components/pageLayouts/Header';
import Footer from '../components/pageLayouts/Footer';
import Email_Address from '../components/customerPage/Email-Address';




function Customer() {
    return ( 
        <div className="d-flex flex-column min-vh-100">
            <Header name="javad"/>
            <div className="flex-grow-1">
                <Email_Address email="sharifi.smjavad@gmail.com" address="Tehran"/>
            </div>
            <Footer />
        </div>
    );
}

export default Customer;