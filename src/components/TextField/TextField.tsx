import React from "react";

export interface TextInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  placeholder: string;
  label?: string;

  // TODO: Fix typescript
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const { label, icon, placeholder, className, ...restProps } = props;

  return (
    <div>
      {label && <span className="block text-sm font-medium text-gray-700">{label}</span>}
      <div className={`${label ? "mt-1" : ""} relative`}>
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <props.icon className="h-5 w-5 text-gray-500" aria-hidden="true" />
          </div>
        )}
        <input
          type="text"
          placeholder={placeholder}
          className={`shadow-sm ${icon && "pl-10"} focus:ring-primary focus:border-primary block  sm:text-sm border-gray-300 rounded-md ${className}`}
          {...restProps}
          onChange={(event) => {
            console.log("Event Fired: ", event);
          }}
        />
      </div>
    </div>
  );
};

export default TextInput;
