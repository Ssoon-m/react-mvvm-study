import React from "react";

type Props = React.ComponentPropsWithoutRef<"input">;

const InputField = ({ ...props }: Props) => {
  return <input {...props}></input>;
};

export default InputField;
