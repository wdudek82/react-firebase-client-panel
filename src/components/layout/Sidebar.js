import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  return (
    <Link to="/client/add" className="btn btn-success btn-block">
      <FontAwesomeIcon icon="plus" /> New
    </Link>
  );
};

export default Sidebar;
