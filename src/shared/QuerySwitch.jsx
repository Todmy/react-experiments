import React from 'react';
import isEmpty from 'lodash.isempty';

const QuerySwitch = (props) => {
  const { loading: LCmp, error: ECmp, success: DCmp, data: response } = props;
  const { loading, error, data } = response;
  
  if (loading && isEmpty(data)) return React.cloneElement(LCmp, response);

  if (error) return React.cloneElement(ECmp, response);

  return React.cloneElement(DCmp, response);
}

QuerySwitch.displayName = 'QuerySwitch';

export default QuerySwitch;