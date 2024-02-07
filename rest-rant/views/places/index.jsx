const React = require('react');
const Def = require('../layouts/default');

const Index = (data) => {
  let placesFormatted = data.places.map((place) => {
    return (
      <div key={place.name} className='col-sm-6'>
        <h2>{place.name}</h2>
        <p>{place.cuisines}</p>
        <img src={place.pic} alt={place.name} />
        <p className='text-center'>
          Located in {place.city}, {place.state}
        </p>
      </div>
    );
  });

  return (
    <Def>
      <main>
        <h1>PLACES INDEX PAGE</h1>
        <div className='row'>{placesFormatted}</div>
      </main>
    </Def>
  );
};

module.exports = Index;