import {
  formatDuration,
  intervalToDuration,
  addMonths,
  type DurationUnit,
} from 'date-fns';

export const formatInterval = ({
  start,
  end,
  format = ['years', 'months'],
}: {
  start: Date;
  end: Date;
  format?: DurationUnit[];
}) => {
  const duration = intervalToDuration({ start, end });
  return formatDuration(duration, { format });
};

export const formatIntervalShort = ({
  start,
  end,
}: {
  start: Date;
  end: Date;
}) => {
  return formatInterval({ start, end })
    .replace('year', 'yr')
    .replace('month', 'mo');
};

export const formatMonthsAsIntervalShort = (months: number) => {
  return formatIntervalShort({
    start: new Date(0),
    end: addMonths(new Date(0), months),
  });
};
