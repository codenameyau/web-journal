import React from 'react';
import styled from 'styled-components';
import { screenReaderOnly } from './Mixins';

export const radioDiameter = 20;
export const transitionConfig = '.2s cubic-bezier(0.075, 0.82, 0.52, 1.405)';

const CustomRadio = styled.span`
  display: inline-block;
  width: ${radioDiameter}px;
  height: ${radioDiameter}px;
  flex: 0 0 ${radioDiameter}px;
  box-sizing: border-box;
  border: 2px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: 100px;
  background-color: transparent;
  position: relative;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow ${transitionConfig};
  &::after {
    content: '';
    position: absolute;
    width: ${radioDiameter * 0.5}px;
    height: ${radioDiameter * 0.5}px;
    top: 50%;
    left: 50%;
    transform-origin: 50% 50%;
    transform: translateX(-50%) translateY(-50%) scale(0);
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors.purple};
    transition: all 0.1s;
  }
`;

const StyledInput = styled.input.attrs({ type: 'radio' })`
  ${screenReaderOnly}
  &:checked + span {
    border-color: ${({ theme }) => theme.colors.purple};
    &::after {
      transition: all ${transitionConfig};
      transform: translateX(-50%) translateY(-50%) scale(1);
    }
  }
  &:focus + span {
    box-shadow: ${({ theme }) => theme.shadows.input};
  }
  &:disabled + span {
    opacity: 0.4;
  }
`;

export const RadioInput = (props) => (
  <>
    <StyledInput {...props} />
    <CustomRadio />
  </>
);
