import { Skeleton } from '@material-ui/lab';
import clsx from 'clsx';
import React, { useState, useCallback } from 'react';

import { useStyles } from './GoogleMap.styles';

import { useCodeBlockContext } from '~/components/CodeLikeBlock';

interface GoogleMapProps {
  className?: string;
  address: string;
  title?: string;
}

const GoogleMapBase: React.FC<GoogleMapProps> = (props) => {
  const context = useCodeBlockContext();
  const classes = useStyles(context);
  const [isLoaded, setLoaded] = useState<boolean>(false);

  const handleLoad = useCallback(() => setLoaded(true), []);

  return (
    <div
      className={clsx(
        classes.googleMap,
        isLoaded && classes.loaded,
        props.className,
      )}
    >
      {!isLoaded && (
        <Skeleton className={clsx(classes.block, classes.skeleton)} />
      )}
      <iframe
        className={clsx(classes.block, classes.iframe)}
        title={props.title}
        width="600"
        height="500"
        id="gmap_iframe"
        src={`https://maps.google.com/maps?q=${props.address}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
        frameBorder={0}
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        onLoad={handleLoad}
      ></iframe>
    </div>
  );
};

export const GoogleMap = React.memo(GoogleMapBase);
