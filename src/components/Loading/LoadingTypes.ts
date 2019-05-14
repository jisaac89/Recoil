import { IRecoil } from '../..';

export interface ILoadingProps extends IRecoil {
  children?: any;
  if?: boolean;
  src?: string;
  title?: string;
  width?: number;
  height?: number;
  icon?: string;
}
