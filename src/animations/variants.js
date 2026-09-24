// Reusable Framer Motion animation variants for luxury editorial agency experience

export const EASE_CUSTOM = [0.22, 1, 0.36, 1]; // Premium cubic-bezier easeOutQuint

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: EASE_CUSTOM },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE_CUSTOM },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: EASE_CUSTOM },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: EASE_CUSTOM },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease: EASE_CUSTOM },
  },
};

export const staggerContainer = (
  staggerChildren = 0.12,
  delayChildren = 0.1,
) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textReveal = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export const imageReveal = {
  hidden: { opacity: 0, scale: 1.08, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: EASE_CUSTOM },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_CUSTOM },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.35, ease: "easeInOut" },
  },
};

export const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const group = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
