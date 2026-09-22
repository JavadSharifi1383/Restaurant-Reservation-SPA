import 'bootstrap/dist/css/bootstrap.min.css';

function Email_Address({ email, address }) {
    return (
        <div>
            <div className="container d-flex justify-content-between align-items-center mt-4 p-3 rounded" style={{ backgroundColor: 'hsl(340, 100%, 97%)' }}>
                <div>
                    <span>Your reservation are also emailed to </span>
                    <span style={{ color: 'red' }}>{email}</span>
                </div>
                <div>
                    <span>Address: </span>
                    <span>{address}</span>
                    <button className="btn btn-danger ms-2">Logout</button>
                </div>
            </div>
            <p className="mt-5 text-center"><b>Work in progress...</b></p>
        </div>
    );
}

export default Email_Address;