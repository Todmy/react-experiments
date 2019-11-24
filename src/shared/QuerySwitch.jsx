import React from 'react';
import isEmpty from 'lodash.isempty';

export default (configComponents) => (queryData) => {
  const { loading: LCmp, error: ECmp, data: DCmp } = configComponents;
  const { loading, error, data, fetchMore } = queryData;
  
  if (loading && isEmpty(data)) return <LCmp loading={loading} />

  if (error) return <ECmp error={error} />;

  return <DCmp data={data} loading={loading} fetchMore={fetchMore} />
}