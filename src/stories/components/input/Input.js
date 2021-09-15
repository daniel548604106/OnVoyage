import React from "react";

const Input = ({
  type,
  label,
  prefix,
  required,
  disabled,
  placeholder,
  value,
  error,
  errorMessage,
  onChange = () => {},
  onPressEnter,
  ...props
}) => {
  let templateInput = <></>;
  switch (type) {
    case "textarea":
      templateInput = (
        <textarea
          className={`storybook-input--${type} storybook-input-disable--${disabled} storybook-input-error--${error}`}
          autoSize
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onPressEnter={onPressEnter}
        />
      );
      break;
    case "prefix":
    case "prefixSuffix":
      templateInput = (
        <input
          className={`storybook-input--${type} storybook-input-disable--${disabled} storybook-input-error--${error}`}
          prefix={prefix}
          suffix={type === "prefix" ? "" : "mm"}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onPressEnter={onPressEnter}
          {...props}
        />
      );
      break;
    default:
      templateInput = (
        <input
          type={type}
          prefix={type === "search" ? "asdasd" : false}
          className={`storybook-input--${type} storybook-input-disable--${disabled} storybook-input-error--${error}`}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onPressEnter={onPressEnter}
          {...props}
        />
      );
  }

  return (
    <div className="storybook-input">
      <label className="input-label">
        <span>
          {label}
          {label && required && <span className="input-required"> *</span>}
        </span>
        {templateInput}
        {error && (
          <div className="errorMsg">
            <li>{errorMessage}</li>
          </div>
        )}
      </label>
    </div>
  );
};
export default Input;
