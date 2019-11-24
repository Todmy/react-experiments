import React from 'react';

import './styles.scss';

export default ({ set: badgesSet, label }) => {
  if (!badgesSet) return null;

  return <div className={`${label} badge-set`}>
    <div className="badge-set-name">{label}: </div>
    <div className="badge-set-content">
     { badgesSet.map((item, ind) => <span className="badge" key={ind}>{item}</span>) }
    </div>
  </div>
}