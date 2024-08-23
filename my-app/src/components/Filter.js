import React, { useState } from 'react';

import '../asset/css/Filter.css';

function Filter() {
  // State to track which section is active
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the active section
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <h2>Filter</h2>

      <button className="accordion" onClick={() => toggleAccordion(0)}>
        Appliances
      </button>
      <div className="panel" style={{ display: activeIndex === 0 ? 'block' : 'none' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <button className="accordion" onClick={() => toggleAccordion(1)}>
        Audio
      </button>
      <div className="panel" style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <button className="accordion" onClick={() => toggleAccordion(2)}>
      Cameras & Camcorders
      </button>
      <div className="panel" style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <button className="accordion" onClick={() => toggleAccordion(3)}>
      Car Electronics & GPS
      </button>
      <div className="panel" style={{ display: activeIndex === 3 ? 'block' : 'none' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <button className="accordion" onClick={() => toggleAccordion(4)}>
      Cell Phones
      </button>
      <div className="panel" style={{ display: activeIndex === 4 ? 'block' : 'none' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <button className="accordion" onClick={() => toggleAccordion(5)}>
      Computers & Tablets
      </button>
      <div className="panel" style={{ display: activeIndex === 5 ? 'block' : 'none' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <button className="accordion" onClick={() => toggleAccordion(6)}>
      Health, Fitness & Beauty
      </button>
      <div className="panel" style={{ display: activeIndex === 6 ? 'block' : 'none' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <button className="accordion" onClick={() => toggleAccordion(7)}>
      Office & School Supplies
      </button>
      <div className="panel" style={{ display: activeIndex === 7 ? 'block' : 'none' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <button className="accordion" onClick={() => toggleAccordion(8)}>
      TV & Home Theater
      </button>
      <div className="panel" style={{ display: activeIndex === 8 ? 'block' : 'none' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <button className="accordion" onClick={() => toggleAccordion(9)}>
      Video Games
      </button>
      <div className="panel" style={{ display: activeIndex === 9 ? 'block' : 'none' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

    </div>
  );
}

export default Filter;
