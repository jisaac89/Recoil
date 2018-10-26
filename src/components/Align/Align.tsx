import * as React from 'react';
import { IAlignProps, IAlignState } from './IAlign';
import { AlignChild } from './AlignChild';
import { AlignWrapper } from './style';

export default class Align extends React.Component<IAlignProps, IAlignState> {
	constructor(props) {
		super(props);
		this.state = {
			widthArray: [],
			maxColumnsLength: 0
		};
	}
	componentDidMount() {
		this.props.columns ? this.alignColumns(this.props.columns) : null;
	}
	componentDidUpdate(prevProps: IAlignProps) {
		if (prevProps.columns !== this.props.columns) {
			this.alignColumns(this.props.columns);
		}
	}
	alignUpdate(widthArray: Array<number>, singleColumnLength: number, maxColumnsLength: number) {
		this.setState(
			{
				maxColumnsLength: maxColumnsLength
			},
			() => {
				widthArray.push(singleColumnLength / this.state.maxColumnsLength * 100);
				this.setState({ widthArray: widthArray });
			}
		);
	}
	alignColumns(columns: Array<number>) {
		let widthArray: Array<number> = [];
		let maxColumnsLength = 0;
		if (columns) {
			columns.map((singleColumnLength) => {
				maxColumnsLength += singleColumnLength;
				this.alignUpdate(widthArray, singleColumnLength, maxColumnsLength);
			});
		}
	}
	alignChildren = (element: JSX.Element, key: string) => {
		let { columns, margin, vertical } = this.props;
		return (
			<AlignChild
				key={key}
				element={element}
				width={this.state.widthArray[key]}
				columns={columns}
				margin={margin}
				vertical={vertical}
			/>
		);
	};
	render() {
		const self = this;
		const props = self.props;
		let { children } = props;

		return (
			<AlignWrapper {...props}>{children.length > 1 ? children.map(this.alignChildren) : children}</AlignWrapper>
		);
	}
}
