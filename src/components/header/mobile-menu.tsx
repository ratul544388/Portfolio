import { useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "../logo";
import { navLinks, socialLinks } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { WhileInView } from "../while-in-view";
import { buttonVariants } from "../ui/button";

const staggerVariants = {
  open: { height: "auto", y: 0 },
  closed: { height: 0, y: -40 },
};

export const MobileMenu = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const animate = open ? "open" : "closed";

  const handleClick = () => {
    if (open) {
      setOpen(false);
      document.body.style.overflow = "auto";
    } else {
      setOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div>
      <WhileInView x={60} y={-60}>
        <motion.button
          onClick={handleClick}
          className={cn(
            "group relative z-[100] h-16 w-14 bg-foreground transition-colors duration-300",
            open && "bg-background",
          )}
          style={{ clipPath: "polygon(33% 0, 100% 0%, 100% 100%, 0% 100%)" }}
          initial="closed"
          animate={animate}
          whileHover={open ? "animate" : "hover"}
        >
          <motion.span
            variants={{
              closed: { left: "50%", x: "-35%", top: "37%" },
              open: { top: "50%", y: "-50%", rotate: 45 },
              hover: { top: "33%" },
            }}
            className={cn(
              "absolute inline-block h-[0.2rem] w-[45%] rounded-full bg-background transition-colors duration-300",
              open && "bg-foreground",
            )}
          />
          <motion.span
            variants={{
              closed: { left: "50%", x: "-35%", bottom: "37%" },
              open: { bottom: "50%", y: "50%", rotate: -45 },
              hover: { bottom: "33%" },
            }}
            className={cn(
              "absolute inline-block h-[0.2rem] w-[45%] rounded-full bg-background transition-colors duration-300",
              open && "bg-foreground",
            )}
          />
        </motion.button>
      </WhileInView>
      <motion.div
        variants={{ open: { y: 0 }, closed: { y: "-100%" } }}
        transition={{ duration: 0.3 }}
        initial="closed"
        animate={animate}
        className="fixed inset-0 z-50 flex h-full w-screen gap-x-12 bg-background p-5"
      >
        <Image
          src="/mobile-menu-bg.webp"
          alt="Background"
          fill
          className="-z-20 object-cover"
        />
        <span className="fixed inset-0 -z-10 bg-neutral-900/80" />
        <Logo size="lg" className="sm:block hidden" />
        <Logo className="block sm:hidden" />
        <div className="flex flex-col mt-28 w-full">
          <nav>
            <motion.ul
              initial="closed"
              animate={animate}
              transition={{ staggerChildren: 0.1, delay: 0.2 }}
              className="space-y-6"
            >
              {navLinks.map(({ href, label }) => (
                <motion.li
                  variants={staggerVariants}
                  key={label}
                  className="overflow-hidden"
                >
                  <Link
                    onClick={handleClick}
                    href={href}
                    className={cn(
                      "text-4xl font-rowdies text-slate-300 transition-colors duration-300 hover:text-slate-100",
                      pathname === href && "text-white",
                    )}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
          <motion.ul
            initial="closed"
            animate={animate}
            transition={{ staggerChildren: 0.1, delay: 5 }}
            className="mb-10 mr-10 mt-auto flex sm:ml-auto sm:flex-col md:mr-20 lg:mr-32 xl:mr-44"
          >
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <motion.li
                variants={staggerVariants}
                key={label}
                className="overflow-hidden"
              >
                <Link
                  href={href}
                  className={buttonVariants({
                    variant: "link",
                    size: "sm",
                    className: "gap-3 text-slate-300 hover:text-slate-200",
                  })}
                >
                  <Icon className="size-4" />
                  <span className="hidden sm:block">{label}</span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </div>
  );
};
