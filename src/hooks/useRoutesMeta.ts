import { useMemo } from 'react';

import { ROUTES_META } from '~/config/routesMeta';

export function useRoutesMeta({
  includeHidden = false,
}: {
  includeHidden?: boolean;
} = {}) {
  return useMemo(() => {
    const arr = Object.values(ROUTES_META);
    return includeHidden ? arr : arr.filter((r) => !r.hidden);
  }, [includeHidden]);
}
