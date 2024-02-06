import { ButtonHTMLAttributes, forwardRef, useEffect, useState } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children }, ref) => {
    const [state, setState] = useState("unmounted");
    useEffect(() => {
      setState("mounted");
    }, [setState, state]);
    return <button ref={ref}>{children}</button>;
  }
);

export { Button };
