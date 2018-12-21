import React from 'react';
import PropTypes from 'prop-types';
import StyledCard from './style';

const OverviewCard = ({ cardInfo: { color, count, title } }) => (
  <StyledCard cardColor={color}>
    <p>{count}</p>
    <p>{title}</p>
  </StyledCard>
);

OverviewCard.propTypes = {
  cardInfo: PropTypes.object.isRequired
};

export default OverviewCard;
