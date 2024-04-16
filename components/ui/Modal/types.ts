export type ModalNotificationProps = {
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'error';
  className: string;
};
