import React from "react";
import { SliderWrapper } from "./InputSlider.styles";

interface InputSliderProps {
  label: string;
  defaultValue: number;
  getAriaValueText: (value: number) => string;
  step: number;
  min: number;
  max: number;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputSlider: React.FC<InputSliderProps> = ({
  label,
  defaultValue,
  getAriaValueText,
  step,
  min,
  max,
  value,
  onChange,
}) => {
  return (
    <React.Fragment>
      <SliderWrapper
        aria-label={label}
        defaultValue={defaultValue}
        getAriaValueText={getAriaValueText}
        valueLabelDisplay="auto"
        step={step}
        marks
        min={min}
        max={max}
        value={value}
        // onChange={onChange}
      />
    </React.Fragment>
  );
};
