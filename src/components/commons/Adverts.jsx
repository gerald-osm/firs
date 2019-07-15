import React from 'react';
import PropTypes from 'prop-types';

const AdvertsPage = (props) => {
  const {
    image,
    style
  } = props;
  return (
    <div>
      <section>
        <div className="banner">
          <img src={image} alt="" style={style} />
        </div>
      </section>
    </div>
  );
};

AdvertsPage.propTypes = {
  image: PropTypes.string,
  style: PropTypes.shape({})
};

export default AdvertsPage;
