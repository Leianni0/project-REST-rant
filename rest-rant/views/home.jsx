const React = require('react');
const Def = require('../layouts/default');

const Home = () => {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img alt="Placeholder image" />
        </div>
        <a href='/places'>
          <button className='btn btn-primary'>Places Page</button>
        </a>
      </main>
    </Def>
  );
};

module.exports = Home;
