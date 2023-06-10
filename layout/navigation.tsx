import React from "react";
import Link from "next/link";
import css from "@/styles/navigation.module.scss";
import CloseIcon from "@/components/icons/close";
import Image from "next/image";

interface NavigationProps {
  show?: boolean;
  onClose: () => void;
}

const Navigation = ({ onClose, show }: NavigationProps) => {
  return (
    <React.Fragment>
      {show && (
        <nav className={`${css["container"]} w-3/4 md:w-1/4 `}>
          <span className={css["close-icon"]} onClick={onClose}>
            <CloseIcon height={30} width={30} />
          </span>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href={`/`}>Home</Link>
            </li>
            <li>
              <Link href={`/project`}>Project</Link>
            </li>
            <li>
              <Link href={`/contact`}>Contact</Link>
            </li>
            <li>
              <Link href={`/features`}>Features</Link>
            </li>
            <li>
              <Link href={`/about-us`}>About Us</Link>
            </li>
          </ul>
        </nav>
      )}
    </React.Fragment>
  );
};
export default Navigation;
