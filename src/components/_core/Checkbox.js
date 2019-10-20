import React from 'react';
import styled from 'styled-components';
import { screenReaderOnly } from './Mixins';

export const radioDiameter = 20;
export const transitionConfig = '.2s cubic-bezier(0.075, 0.82, 0.52, 1.405)';

export const CustomCheckbox = styled.span`
  display: inline-block;
  width: ${radioDiameter}px;
  height: ${radioDiameter}px;
  flex: 0 0 ${radioDiameter}px;
  box-sizing: border-box;
  border: 2px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: 2px;
  background-color: transparent;
  position: relative;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow ${transitionConfig}, background-color 0.15s;
  &::after {
    content: ' ';
    position: absolute;
    top: 7px;
    left: 4px;
    width: 5px;
    height: 11px;
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg) scale(0.3) translate(-50%, -50%);
    opacity: 0;
    transition: transform ${transitionConfig}, opacity 0.1s;
  }
`;

export const StyledInput = styled.input.attrs({ type: 'checkbox' })`
  ${screenReaderOnly}
  &:checked + span {
    transition: box-shadow ${transitionConfig}, background-color 0s;
    background-color: ${({ theme }) => theme.colors.purple};
    border-color: ${({ theme }) => theme.colors.purple};
    &::after {
      opacity: 1;
      transform: rotate(45deg) scale(1) translate(-50%, -50%);
    }
  }
  &:focus + span {
    box-shadow: ${({ theme }) => theme.shadows.input};
  }
  &:disabled + span {
    opacity: 0.4;
  }
`;

export const CheckboxInput = (props) => (
  <>
    <StyledInput {...props} />
    <CustomCheckbox />
  </>
);
