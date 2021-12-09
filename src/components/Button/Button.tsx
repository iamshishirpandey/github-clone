import React from "react";

export type ButtonSize = "md";
export type ButtonType = "primary";

type NativeButtonType = JSX.IntrinsicElements["button"]["type"];

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  btnType?: ButtonType;
  size?: ButtonSize;
  loading?: boolean;
  full?: boolean;
  type?: NativeButtonType;
}

const sizePaddingMapping: {
  [Property in ButtonSize]: string;
} = {
  //If more than one size is added,
  md: "px-4 py-2 text-sm",
};

const backgroundTypeMapping: {
  [Property in ButtonType]: string;
} = {
  primary: "text-gray-500 border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary",
};

const Button: React.FC<ButtonProps> = (props) => {
  const { loading, children, className, size = "md", btnType = "primary", type = "button", full, ...restProps } = props;

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type || "button"}
      className={`inline-flex ${full && "w-full"} justify-center items-center focus:outline-none ${sizePaddingMapping[size]} border border-transparent font-medium rounded-md shadow-sm text-white ${backgroundTypeMapping[btnType]} ${className}`}
      {...restProps}
    >
      {loading ? <div className="__loading" /> : children}
    </button>
  );
};
export default Button;
