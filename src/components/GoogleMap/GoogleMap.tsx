import React from "react";
import clsx from "clsx";

import { useCodeBlockContext } from "~/components/CodeLikeBlock";

import { useStyles } from "./GoogleMap.styles";

interface GoogleMapProps {
  className?: string;
}

export const GoogleMap: React.FC<GoogleMapProps> = (props) => {
  const context = useCodeBlockContext();
  const classes = useStyles(context);

  return (
    <div className={clsx(classes.googleMap, props.className)}>
      <iframe
        className={classes.iframe}
        title="My Location"
        width="600"
        height="500"
        id="gmap_iframe"
        src="https://maps.google.com/maps?q=Tel%20Aviv-Yafo&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder={0}
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
      ></iframe>
    </div>
  );
};
