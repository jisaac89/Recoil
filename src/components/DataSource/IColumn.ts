export interface IColumn {
  title?: string;
  width?: number | string;
  name?: string;
  template?: (element: any) => JSX.Element;
  hideHeader?: boolean;
  titleTemplate?: (element?: any) => JSX.Element;
}
