interface IAppProps {
  checked ? : boolean;
  ghost ? : boolean;
  type ? : string;
  children ? : any;
}

interface IAppState {
  nowShowing  ? : string;
  editing ? : any;
}

interface ISelectableProps {
  checked ? : boolean;
  ghost ? : boolean;
  type ? : string;
  children ? : any;
}

interface IButtonProps {
  active?: boolean;
  disabled?: boolean;
  block?: boolean;
  className? : string;
  type?: string;
  icon? : string;
  href?: string;
  target?: string;
  ghost ? : boolean;
  flex ? : boolean;
  strech ? : boolean;
  children ? : boolean;
  pointer ? : any;
  right ? : boolean;
  left ? : boolean;
  size ? : string;
  submit ? : boolean;
  style ? : any;
  checked ? : boolean;
  onClick?: () => void;
}

interface IButtonState {
  checked? : boolean;
}

interface ISelectableState {}
