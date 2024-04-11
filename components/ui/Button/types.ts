export interface ButtonProps {
  children: string;
  type: 'submit' | 'button';
  onClick?: () => void;
  className?: string;
}
