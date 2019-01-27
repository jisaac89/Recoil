import * as React from 'react';
import styled from 'styled-components';
import { IWizardProps } from './IWizard';

export const Wizard = (props: IWizardProps) => {
	const childrenGreaterThanOne = props.children.length > 1;

	const createSlidesPartial = (item: Array<any>, index: string | number) => {
		let selected = props.slideIndex === index;
		return (
			<WizardSlide visible={selected} key={index}>
				{item}
			</WizardSlide>
		);
	};

	return (
		<WizardWrapper style={props.style}>
			{childrenGreaterThanOne ? (
				<WizardTrack>{props.children.map(createSlidesPartial)}</WizardTrack>
			) : (
				props.children
			)}
		</WizardWrapper>
	);
};

const WizardWrapper = styled.div<IWizardProps>``;
const WizardTrack = styled.div<IWizardProps>``;
const WizardSlide = styled.div<IWizardProps>``;

export default Wizard;
