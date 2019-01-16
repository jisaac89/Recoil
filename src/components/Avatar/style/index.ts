import styled from 'styled-components';
import { backgroundImage } from '../../../styles/classList';

export const AvatarWrapper = styled.div`${(props) => (!props.src ? backgroundImage(props.src) : null)};`;
