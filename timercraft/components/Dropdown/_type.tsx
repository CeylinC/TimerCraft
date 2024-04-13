export interface IProp {
    menuItems: { name: string; value: string }[];
    isDisabled?: boolean;
    selected: { name: string; value: string };
    setSelected: (selected: { name: string; value: string }) => void;
    className?: string;
  }