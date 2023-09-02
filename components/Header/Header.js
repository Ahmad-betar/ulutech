import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";
import Link from "next/link";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Menu, MenuItem } from "@mui/material";
import { usePathname } from 'next/navigation';


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [AnchorEl, setAnchorEl] = useState(null);
  const open = Boolean(AnchorEl);

// const router = useRouter();
const Pathname = usePathname();

  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset === 0 ? false : true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeHandler = () => {
    setAnchorEl(null);
  };

  const menuHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const isActive = (pathname) => {
    return Pathname === pathname ? classes.active : "";
  };

  return (
    <header
      className={`${classes.header} 
            ${scrolled ? classes.scrolled : ""}`}
    >
      <div className={classes.one}>
        <Link href = '/' >
          <img src="/Logo-ULU-Tech-06-98x117.png" />
        </Link>
      </div>

      <button
        id=" menu-button"
        onClick={menuHandler}
        aria-controls={open ? "resources-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        className={classes.menuButton}
      >
        <MenuOutlinedIcon sx={{ color: "var(--main-yellow)" }} />
      </button>
      <Menu
        id="resources-menu"
        anchorEl={AnchorEl}
        open={open}
        MenuListProps={{
          "aria-labelledby": "menu-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical : 'top',
          horizontal : 'right'
        }}
        onClose={closeHandler}
          
      
      >
        <MenuItem>
          <Link 
            href="/" 
            className={isActive("/")} 
            onClick={closeHandler}
          >
            HOME
          </Link>
        </MenuItem>
        <MenuItem>
          <Link 
            href="/contact" 
            className={isActive("/contact")} 
            onClick={closeHandler}
          >
            CONTACT
          </Link>
        </MenuItem>
        <MenuItem>
          <Link 
            href="/about" 
            className={isActive("/about")} 
            onClick={closeHandler}
          >
            ABOUT
          </Link>
        </MenuItem>
      </Menu>

      <div className={classes.two}>
        <nav>
          <ul>
            <li>
              <Link href="/" className={isActive("/")}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="/contact" className={isActive("/contact")}>
                CONTACT
              </Link>
            </li>
            <li>
              <Link href="/about" className={isActive("/about")}>
                ABOUT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
