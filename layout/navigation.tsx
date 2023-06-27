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
        <nav className={`${css["container"]} w-3/4 md:w-1/4 p-5 sidebar-wrap animate fadeInRight one`}>
          <span className={css["close-icon"]} onClick={onClose}>
            <CloseIcon height={30} width={30} />
          </span>

          <ul className="menu lg:menu-horizontal bg-base-200 rounded-box w-full pt-10">
            {/* TODO: this is makking the dropdown, you change the styles. like the font size etc stuff */}
            {menuItems.map((item) =>
              item.submenu ? (
                <li key={item.id} className="hover:text-[#00bcd4]">
                  <details>
                    <summary>
                      <Link href={item.url}>{item.title}</Link>
                    </summary>
                    <ul className="space-y-4">
                      {item.submenu.map((submenu) =>
                        submenu.sublinks ? (
                          <li className="" key={submenu.id}>
                            <details>
                              <summary>
                                <Link href={submenu.url}>
                                {submenu.title}
                                </Link>
                              </summary>
                              <ul className="space-y-4">
                                {submenu.sublinks.map((link) => (
                                  <li key={link.id}>
                                    <Link href={link.url} className="">
                                       {link.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </details>
                          </li>
                        ) : (
                          <li key={submenu.id}>
                            <Link href={submenu.url}>{submenu.title}</Link>
                          </li>
                        )
                      )}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={item.id}>
                  <Link href={item.url}>{item.title}</Link>
                </li>
              )
              
            )}
          </ul>
        </nav>
      )}
    </React.Fragment>
  );
};
export default Navigation;

// TODO: THis are the links, you need to change it accordingly, am just putting spare links here
const menuItems = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about-us",
    submenu: [
      {
        id: 1,
        title: "About Company",
        url: "/about-us",
        sublinks: [
          
          
        ],
      },
      {
        id: 2,
        title: "Leadership",
        url: "/leadership",
        
      },
      {
        id: 3,
        title: "CSR",
        url: "/csr-copy",
       
      },
    ],
  },
  {
    id: 2,
    title: "Project",
    url: "/project",
    submenu: [
      {
        id: 1,
        title: "Commercial Projects",
        url: "/commercial",
        sublinks: [
          {
            id: 1,
            title: "Think Campus 1",
            url: "/think-Campus1",
          },
          {
            id: 2,
            title: "Bosch Adugodi",
            url: "/Bosch-Adugodi",
          },
          {
            id: 3,
            title: "Bosch Coimbatore",
            url: "/Bosch-coimbatore",
          },
          {
            id: 4,
            title: "Bosch Bangalore",
            url: "/Bosch-bangalore",
          },
          {
            id: 5,
            title: "Global Tech Park Richmond",
            url: "/Global-Heights",
          },

          {
            id: 6,
            title: "Think Campus 2",
            url: "Think-Campus2",
          },
        ],
      },
      {
        id: 2,
        title: "Residential Projects",
        url: "/Residential",
        sublinks: [
          {
            id: 1,
            title: "Global Heights",
            url: "Global-heights",
          },
          {
            id: 2,
            title: "Palm Trees",
            url: "/satko-palmtrees",
          },
        ],
      },
      {
        id: 3,
        title: "Others",
        url: "/other-projects",
        sublinks: [
          {
            id: 1,
            title: "Solar Park Tumkur",
            url: "/solar-park",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact-us",
  },
 
];
