import * as React from 'react';
import { IAlignProps, IAlignState } from './IAlign';
import { AlignWrapper, AlignChildWrapper } from './style';
import { returnObjectWithoutProperties } from '../Utils';

export default class Align extends React.Component<IAlignProps, IAlignState> {
	public static defaultProps = {
		name: 'Align'
	};
	state = {
		widthArray: [],
		maxColumnsLength: 0
	};
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
		const groupChildProps = returnObjectWithoutProperties(this.props, [
			'children',
			'checked',
			'block',
			'width',
			'height',
			'style',
			'name'
		]);

		// loop through all children and pass new props
		let renderChild = (props: any) => {
			return React.cloneElement(element as React.ReactElement<any>, groupChildProps);
		};

		let { columns, margin, vertical } = this.props;
		return (
			<AlignChildWrapper
				key={key}
				width={this.state.widthArray[key]}
				columns={columns}
				margin={margin}
				vertical={vertical}
			>
				{renderChild(this.props)}
			</AlignChildWrapper>
		);
	};
	render() {
		let { children } = this.props;
		return (
			<AlignWrapper  {...this.props}>
				{children.length > 1 ? children.map(this.alignChildren) : children}
			</AlignWrapper>
		);
	}
}
