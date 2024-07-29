import { motion } from "framer-motion";

export const Map = () => {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        x: ["100%", 0],
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      className="h-screen opacity-0 lg:[clip-path:polygon(0_0,100%_0%,100%_100%,14%_100%)]"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.49930118577!2d90.254872327798!3d23.7810672395809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1721066951561!5m2!1sen!2sbd"
        width="600"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-none"
      ></iframe>
    </motion.div>
  );
};
