import React, { FunctionComponent, useState, useEffect } from 'react';
import { IAlignProps, IAlignState } from './IAlign';
import { AlignWrapper, AlignChildWrapper } from './style';
import { returnObjectWithoutProperties } from '../Utils';


export const Align:FunctionComponent<IAlignProps> = (props : IAlignProps) => {
	
	const [widthArray, setWidthArray] = useState([0]);

	useEffect(() => {
		alignColumns(!!props.columns ? props.columns : [])
	  }, [widthArray])
	
	const alignUpdate = (widthArray: Array<number>, singleColumnLength: number, maxColumnsLength: number) => {
		if (props.columns){
			props.columns.map((singleColumnLength) => {
				widthArray.push(singleColumnLength / maxColumnsLength * 100);
				setWidthArray(widthArray);
			});
		}
	}
	const alignColumns = (columns: Array<number>) =>  {
		let widthArray: Array<number> = [];
		let maxColumnsLength = 0;
		if (columns) {
			columns.map((singleColumnLength) => {
				maxColumnsLength += singleColumnLength;
				alignUpdate(widthArray, singleColumnLength, maxColumnsLength);
			});
		}
	}
	const alignChildren = (element: JSX.Element, key: string) => {
		const groupChildProps = returnObjectWithoutProperties(props, [
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

		let { columns, margin, vertical } = props;
		return (
			<AlignChildWrapper
				key={key}
				width={widthArray[key]}
				columns={columns}
				margin={margin}
				vertical={vertical}
			>
				{renderChild(props)}
			</AlignChildWrapper>
		);
	};
	
	return (
		
		<AlignWrapper  {...props}>
			{props.children.length > 1 ? props.children.map(alignChildren) : props.children}
		</AlignWrapper>
	);
}
