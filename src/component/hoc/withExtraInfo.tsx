import React, { useState } from 'react';
 
type ExtraInfoProps = {
  extraInfo : string
}

export function withExtraInfo<P>(WrappedComponent: React.ComponentType<P> & ExtraInfoProps ) {

  const ComponentWithExtraInfo = (props : P) => {
   const [extraInfo, setExtraInfo] = useState('');
   setExtraInfo('important data.');

    return <WrappedComponent {...props} extraInfo={extraInfo} />;
  };

  return ComponentWithExtraInfo;
}