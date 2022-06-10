export interface DropDownProps<T> {
  options: T[];
  value: T;
  onChange: (value: T) => void;
}
