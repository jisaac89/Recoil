export interface IColumn {
  title?: string;
  width?: number | string;
  name?: string;
  template?: (element: Array<Object>) => JSX.Element;
  hideHeader?: boolean;
  titleTemplate?: (element?: Array<Object>) => JSX.Element;
}
