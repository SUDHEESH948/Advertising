import { motion } from "framer-motion";
import { reveal } from "../animations/variants";

export default function Fade({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.16 }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
