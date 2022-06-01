import React from 'react';

const Places = ({ places, filterItems }) => {
  return (
    <div className="btn-container">
      {places.map((place, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(place)}
          >
            {place}
          </button>
        );
      })}
    </div>
  );
};

export default Places;
