export interface IModalProps {
  ghost?: boolean;
  open?: boolean;
  float?: boolean;
  effect?: string;
  className?: string;
  icon?: string;
  fullScreen?: boolean;
  style?: object;
  title?: string;
  onClose?: () => void;
  children?: any;
  beforeOpen?: () => void;
  afterOpen?: () => void;
  mobile?: boolean;
  hideFullScreenButton?: boolean;
  hideCloseButton?: boolean;
  hideHeader?: boolean;
  overflow?: boolean;
  fill?: boolean;
  closeId?: string;
  flexCenter?: boolean;
}

export interface IModalState {
  fullScreen?: boolean;
  open?: boolean;
  showChildren?: boolean;
}
