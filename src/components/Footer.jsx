import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex flex-1 flex-col justify-start mr-10">
        <img
          src={logo}
          alt="logo"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} max-w-[312px] mt-6`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex flex-[1.5] flex-row justify-between flex-wrap md:mt-0 mt-10 w-full">
        {footerLinks.map(({ links, title }) => (
          <div key={title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="text-white text-lg font-medium font-poppins mb-6">
              {title}
            </h4>
            <ul className="[&>*]:mb-[12px]">
              {links.map(({ link, name }) => (
                <li
                  key={name}
                  className={`font-poppins text-dimWhite transition-all hover:text-secondary last:mb-0`}
                >
                  <a href="#">{name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="border-t-[1px] border-[#3F3E45] w-full flex justify-between items-center md:flex-row flex-col pt-6">
      <div className="flex gap-4">
        <span className="font-poppins font-normal text-center text-[14px] leading-[27px] text-white">
          Copyright
        </span>
        <span className="font-poppins font-normal text-center text-[14px] leading-[27px] text-white">
          ©
        </span>
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          2021 HooBank. All Rights Reserved.
        </p>
      </div>

      <div className="flex flex-row md:mt-0 mt-6 [&>*]:mr-6">
        {socialMedia.map(({ id, icon, link }) => (
          <a href="#" key={id}>
            <img
              src={icon}
              alt={id}
              className={`w-[21px] h-[21] object-contain last:mr-0`}
            />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
