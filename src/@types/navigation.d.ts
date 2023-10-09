import {Routes} from '@navigators/routes';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      [Routes.LOGIN]: undefined;
      [Routes.HOME]: undefined;
      [Routes.BOTTOM_TAB]: undefined;
      [Routes.WEB_VIEW]: {uri: string};
    }
  }
}
