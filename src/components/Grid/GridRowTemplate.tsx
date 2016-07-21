import * as React from 'react';
import Open from '../Open/Open';

interface IGridRowTemplateProps {
  columns ? : any;
  detailTemplate ? : any;
  dataSource ? : any;
  i ? : any;
  expanded ? : boolean;
}

interface IGridRowTemplateState {
  open ? : boolean;
  selected? : any;
}

export default class GridRowTemplate extends React.Component<IGridRowTemplateProps,IGridRowTemplateState>{
  render() {
    const self = this;
    const props = self.props;
    const i = props.i;

    return (
      <Open if={props.expanded}>
        {self.props.detailTemplate(i, self.props.dataSource[i])}
      </Open>
    )
  }
}