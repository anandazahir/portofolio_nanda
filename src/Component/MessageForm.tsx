import React, { useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion"; // Import Framer Motion
import Toast from "./Toast"; // Import the Toast component

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

interface FormErrors {
  fullName: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    fullName: "",
    email: "",
    message: "",
  });

  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({
    show: false,
    message: "",
    type: "success",
  });

  // Animasi untuk border
  const fullNameBorderControls = useAnimation();
  const emailBorderControls = useAnimation();
  const messageBorderControls = useAnimation();

  // State untuk animasi tombol
  const [isClicked, setIsClicked] = useState(false);

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: FormErrors = { fullName: "", email: "", message: "" };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Trigger button animation
      setIsClicked(true);

      // Simulate form submission (e.g., API call)
      setTimeout(() => {
        // Clear form data
        setFormData({ fullName: "", email: "", message: "" });
        // Show success toast
        setToast({
          show: true,
          message: "Message sent successfully!",
          type: "success",
        });
        // Reset button animation after 2 seconds
        setTimeout(() => setIsClicked(false), 100);
      }, 700); // Simulate a delay for the API call
    } else {
      // Show error toast if form is invalid
      setToast({
        show: true,
        message: "Please fix the errors before submitting.",
        type: "error",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const closeToast = () => {
    setToast({ ...toast, show: false });
  };

  return (
    <>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
        noValidate
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="col-span-1 md:col-span-2">
          <div className="relative">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              onFocus={() => fullNameBorderControls.start({ scaleX: 1 })}
              onBlur={() => fullNameBorderControls.start({ scaleX: 0 })}
              className="w-full px-3 py-2 bg-transparent border-t-0 border-r-0 border-l-0 dark:text-white border-b-2 border-gray-700 focus:outline-none rounded-[0px]"
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-400 origin-left"
              initial={{ scaleX: 0 }} // Start with no width
              animate={fullNameBorderControls} // Control animation
              transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
            />
          </div>
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {" "}
              <i className="fa-solid fa-triangle-exclamation mr-2"></i>
              {errors.fullName}
            </p>
          )}
        </div>
        <div className="col-span-1 md:col-span-2">
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => emailBorderControls.start({ scaleX: 1 })}
              onBlur={() => emailBorderControls.start({ scaleX: 0 })}
              className="w-full px-3 py-2 bg-transparent border-t-0 border-r-0 border-l-0 dark:text-white border-b-2 border-gray-700 focus:outline-none rounded-[0px]"
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-400 origin-left"
              initial={{ scaleX: 0 }} // Start with no width
              animate={emailBorderControls} // Control animation
              transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              <i className="fa-solid fa-triangle-exclamation mr-2"></i>
              {errors.email}
            </p>
          )}
        </div>
        <div className="col-span-1 md:col-span-2">
          <div className="relative">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => messageBorderControls.start({ scaleX: 1 })}
              onBlur={() => messageBorderControls.start({ scaleX: 0 })}
              className="w-full px-3 py-2 bg-transparent border-t-0 border-r-0 border-l-0 dark:text-white border-b-2 border-gray-700 focus:outline-none h-32 resize-none rounded-[0px]"
            />
            <motion.div
              className="absolute bottom-2 left-0 w-full h-0.5 bg-sky-400 origin-left"
              initial={{ scaleX: 0 }} // Start with no width
              animate={messageBorderControls} // Control animation
              transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
            />
          </div>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              <i className="fa-solid fa-triangle-exclamation mr-2"></i>
              {errors.message}
            </p>
          )}
        </div>
        <div className="col-span-1 md:col-span-2 w-fit place-self-end">
          <button
            type="submit"
            className="w-full bg-gray-500 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out flex gap-2 items-center overflow-hidden"
          >
            {/* Paper Icon */}
            <motion.img
              src="paper.svg"
              alt=""
              className="w-6 h-6"
              animate={{
                x: isClicked ? "100%" : 0, // Move to the right
                opacity: isClicked ? 0 : 1,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            {/* Text */}
            <AnimatePresence>
              {!isClicked && (
                <motion.span
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Send Message
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </form>

      {/* Render the Toast component */}
      {toast.show && (
        <Toast message={toast.message} type={toast.type} onClose={closeToast} />
      )}
    </>
  );
};

export default ContactForm;
