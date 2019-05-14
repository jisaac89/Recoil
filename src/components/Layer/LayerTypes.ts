import { IRecoil } from '../..';

export interface ILayerProps extends IRecoil {
  border?: boolean;
  overflow?: boolean;
  left?: boolean;
  right?: boolean;
  scrollY?: boolean;
  scrollX?: boolean;
  style?: Object;
  onClick?: () => void;
  key?: string | number;
  parent?: boolean;
  child?: boolean;
  dimensions?: [string, string, number];
  nightmode?: boolean;
  scroll?: boolean;
  offset?: number;
  shadow?: boolean;
  flexCenter?: boolean;
  onScroll?: any;
  id?: string;
  borderRadius?: boolean;
  dropShadow?: boolean;
  length?: number;
}
