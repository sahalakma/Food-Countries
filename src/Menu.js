import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, img, Description} = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={process.env.PUBLIC_URL+img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
              </header>
              <p className='item-text'>{Description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
