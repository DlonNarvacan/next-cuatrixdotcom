import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col w-full">
      <nav className="flex w-full items-center shadow-md justify-between md:justify-start  py-7 px-8 md:px-16 md:gap-20">
        <Link href={"/"}>
          <Image
            src={"/assets/global/FullLogo.svg"}
            width={180}
            height={37}
            className="hidden lg:block object-contain"
            alt="Cuatrix Logo"
            priority
          />
          <Image
            src={"/assets/global/LogoIcon.svg"}
            width={37.56}
            height={37.56}
            alt="Cuatrix Logo Icon"
            className="object-contain lg:hidden"
          ></Image>
        </Link>
        <div className="flex">
          <div className="hidden md:flex gap-14 ">
            <Link href={"/services"} className="hover:pink">
              Services
            </Link>
            <Link href={"/company"} className="hover:pink">
              Company
            </Link>
            <Link href={"/careers"} className="hover:pink">
              Careers
            </Link>
            <Link href={"/projects"} className="hover:pink">
              Projects
            </Link>
            <Link href={"/contacts"} className="hover:pink">
              Contacts
            </Link>
          </div>
          <Image
            src={"/assets/icons/hamburger.svg"}
            width={25}
            height={25}
            alt="Hamburger Icon"
            className=" md:hidden object-contain"
          ></Image>
        </div>
      </nav>
      <div>{/* This is the dropdown */}</div>
    </div>
  );
};

export default Header;
