import { IRecoil } from '../..';

export interface IInputProps extends IRecoil {
  id?: string;
  ref?: string;
  type?: string;
  icon?: string;
  title?: string;
  placeholder?: string;
  value?: string | string[];
  defaultValue?: string | string[];
  style?: object;
  errorInline?: boolean;
  errorDirection?: 'left' | 'top' | 'right' | 'bottom';
  error?: boolean;
  errorMessage?: string | JSX.Element;
  rows?: number;
  cols?: number;
  block?: boolean;
  autoExpand?: boolean;
  onBlur?: any;
  onChange?: (value: any, event: React.FormEvent<any>) => void;
  scrollHeight?: number;
  focusOnMount?: boolean;
  focusDelay?: number;
  advanced?: boolean;
  maxLength?: number;
  max?: number;
  min?: number;
  name?: string;
  required?: boolean;
  autoComplete?: string;
  disableKeys?: string[];
  inputSize?: number;
  inputId?: any;
  material?: boolean;
  pattern?: string;
}

export interface IInputState {
  checked: boolean;
  value: string | string[];
  mouseOut: boolean;
}
