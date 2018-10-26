import styled from 'styled-components/native';
import { backgroundImage } from '../../../styles/classList';

export const AvatarWrapper = styled.View`${(props) => (!props.src ? backgroundImage(props.src) : null)};`;
