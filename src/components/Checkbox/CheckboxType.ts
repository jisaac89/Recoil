import { IRecoil } from '../..';

export interface ICheckboxProps extends IRecoil {
  onChange: (value: boolean, event?: React.MouseEvent<MouseEvent>) => void;
  checked: boolean;
  icon?: string;
  title?: string;
  loading?: boolean;
}
