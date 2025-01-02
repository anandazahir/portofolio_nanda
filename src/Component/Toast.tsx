import React, { useEffect, useState } from "react";

type ToastType = "success" | "error";

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000); // Auto-close after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  const toastStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className={`${toastStyles[type]} px-6 py-3 rounded-md shadow-lg flex items-center justify-between`}
      >
        <span>{message}</span>
        <button
          onClick={() => setVisible(false)}
          className="ml-4 text-white hover:text-gray-200 focus:outline-none"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Toast;
