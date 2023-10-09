import {parseISO} from 'date-fns';

export const formatDate = (value: string) =>
  parseISO(value).toLocaleDateString();
