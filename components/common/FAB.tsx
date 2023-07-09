import {
  ForwardRefExoticComponent,
  ForwardedRef,
  PropsWithChildren,
  forwardRef,
} from "react";

import { AddIcon } from "@chakra-ui/icons";
import { Button, ButtonProps } from "@chakra-ui/react";

import IconArrow from "@/components/icons/IconArrow";

type BaseFABComponent = ForwardRefExoticComponent<
  FABProps & {
    ref?: ForwardedRef<HTMLButtonElement>;
  }
>;

type FABComponent = BaseFABComponent & {
  Add: BaseFABComponent;
  Up: BaseFABComponent;
};

type FABProps = PropsWithChildren<
  ButtonProps & {
    icon?: React.ReactNode;
    l?: number;
    r?: number;
    t?: number;
    b?: number;
  }
>;

const FAB: FABComponent = forwardRef<HTMLButtonElement, FABProps>(
  ({ children, icon, l, r, t, b, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        minW={10}
        minH={10}
        position={"fixed"}
        w={icon ? 10 : "auto"}
        borderRadius={40}
        textStyle="subtitle2"
        left={l}
        top={t}
        right={r}
        bottom={b}
        boxShadow={"0px 4px 16px rgba(48, 49, 54, 0.24)"}
        {...props}
      >
        {icon}
        {children}
      </Button>
    );
  },
) as FABComponent;

const Add = forwardRef<HTMLButtonElement, FABProps>((props, ref) => (
  <FAB ref={ref} icon={<AddIcon boxSize={18} />} {...props}></FAB>
));

const Up = forwardRef<HTMLButtonElement, FABProps>((props, ref) => (
  <FAB
    ref={ref}
    icon={<IconArrow style={{ flexShrink: 0 }} color="white" />}
    {...props}
  ></FAB>
));

Add.displayName = "Add";
Up.displayName = "Up";
FAB.displayName = "FAB";

FAB.Add = Add;
FAB.Up = Up;

export default FAB;
