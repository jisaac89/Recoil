import * as React from 'react';
import { ISelectableProps } from './ISelectable';
import styled from 'styled-components/native';

class Selectable extends React.Component<ISelectableProps, {}> {
	render() {
		const self = this;
		const props = self.props;
		return <SelectableWrapper {...props} />;
	}
}

export default Selectable;

const SelectableWrapper = styled.View`
	${(props) => (props.checked ? 'width:100%' : 'width:0%')};
	background: blue;
	height: 1px;
	bottom: 1px;
	z-index: 2;
`;
