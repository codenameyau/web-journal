**Additional available styled system props**
- [space props](/#/Variables/Spacing) (e.g. `mt="m"`)

The `ChoicePad` component can be used a group of choice buttons, radio inputs, or checkboxes. To use it
you will need to wrap your component with the `ChoiceGroup` component.


```jsx
<ChoiceGroup legend="ChoicePad">
  <ChoicePad icon={CoachImage} label="Unchecked" />
  <ChoicePad icon={CoachImage} checked label="Checked" />
  <ChoicePad icon={CoachImage} disabled label="Disabled unchecked" />
  <ChoicePad icon={CoachImage} disabled checked label="Disabled checked" />
</ChoiceGroup>
```

You can hide the `ChoiceGroup` legend by passing the `hideLegend` prop.
```jsx
<ChoiceGroup legend="ChoicePad" hideLegend>
  <ChoicePad icon={CoachImage} label="Unchecked" />
  <ChoicePad icon={CoachImage} checked label="Checked" />
  <ChoicePad icon={CoachImage} disabled label="Disabled unchecked" />
  <ChoicePad icon={CoachImage} disabled checked label="Disabled checked" />
</ChoiceGroup>
```

```jsx
<ChoiceGroup legend="ChoicePadRadio">
  <ChoicePadRadio icon={CoachImage} label="Unchecked" />
  <ChoicePadRadio icon={CoachImage} checked label="Checked" />
  <ChoicePadRadio icon={CoachImage} disabled label="Disabled unchecked" />
  <ChoicePadRadio icon={CoachImage} disabled checked label="Disabled checked" />
</ChoiceGroup>
```

```jsx
<ChoiceGroup legend="ChoicePadCheckbox">
  <ChoicePadCheckbox icon={CoachImage} label="Unchecked" />
  <ChoicePadCheckbox icon={CoachImage} checked label="Checked" />
  <ChoicePadCheckbox icon={CoachImage} disabled label="Disabled unchecked" />
  <ChoicePadCheckbox icon={CoachImage} disabled checked label="Disabled checked" />
</ChoiceGroup>
```
