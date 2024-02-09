const React = require('react');
const Def = require ('/..layouts/default');
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
                <div className='row'>

                </div>
                <div className='col'></div>
                
                <h1>{data.place.name}</h1>
                <div className='row align-items-center'>
                    <a href='' className='btn btn-warning'>
                        Edit
                        </a>
                    <form action='?_method=DELETE at 9:01' method='POST'>
                    <button type='submit' className='btn btn-danger'> Delete </button>
                    </form>
                </div>
            </main>
        </default>
    );
};

module.exports = show;