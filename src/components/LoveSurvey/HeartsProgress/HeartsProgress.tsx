import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from '@material-ui/icons';
import clsx from 'clsx';
import React from 'react';

import { useStyles } from './HeartsProgress.styles';

export interface HeartsProgressProps {
  className?: string;
  percentage: number;
}

const HeartsProgressBase: React.FC<HeartsProgressProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.heartsProgress, props.className)}>
      <span className={classes.heartBracket}>[</span>

      <div className={classes.heartsWrapper}>
        <div className={classes.heartsEmpty}>
          {new Array(10).fill(0).map((_, index) => (
            <FavoriteBorderIcon
              key={index}
              className={clsx(
                classes.emptyHeartIcon,
                index + 1 <= Math.round(props.percentage / 10) &&
                  classes.fadeOutHeartIcon,
              )}
            />
          ))}
        </div>
        <div className={classes.heartsFilled}>
          {new Array(Math.round(props.percentage / 10))
            .fill(0)
            .map((_, index) => (
              <FavoriteIcon key={index} className={classes.filledHeartIcon} />
            ))}
        </div>
      </div>

      <span className={classes.heartBracket}>]</span>
    </div>
  );
};

export const HeartsProgress = React.memo(HeartsProgressBase);
