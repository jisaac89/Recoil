export interface IColumn {
    title?: string;
    width?: number | string;
    name?: string;
    template?: (element: any, index?: string) => JSX.Element;
    hideHeader?: boolean;
    titleTemplate?: (element?: any) => JSX.Element;
}