export interface IProp {
  menuItems: { name: string; value: string }[];
  isDisabled?: boolean;
  selected: string;
  onChange: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  className?: string;
}
