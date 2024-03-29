const React = require('react');
const Def = require ('/.layouts/default');
//Look at instrctor code
const show = (data) => {

    const cuisinesBadges = places.cuisines.split(',').map((cuisine) => {
        return (
            <span key={cuisine} className='badge rounded-pill text-bg-info me-2'>
                {cuisine}
            </span>
        );
    });
    return (
        <default>
             <main className='container'>
                <div className='row align-items-start'>
                    <div className='col'>
                        <img src={place.pic} alt={place.name} />
                    </div>
                    <div className='col'>
                        <h1>{place.name}</h1>
                        <p>
                            Located at: {place.city}, {place.state}
                        </p>
                        <p>{cuisinesBadges}</p>
                    </div>
                </div>
                <div className='row align-items-center'>
                    <div className='col'>
                        <a href={`/places/${id}/edit`} className='btn btn-warning'>
                            Edit
                        </a>
                        <form action={`/places/${id}?_method=DELETE`} method='POST'>
                            <button type='submit' className='btn btn-danger'>
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </default>
    );
};

module.exports = show;