//react router
import { NavLink } from "react-router-dom";
//react
import { useState } from "react";
//chakra
import { Flex, Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { CloseIcon } from "@chakra-ui/icons";

export const MenuComp = () => {
  const [display, changeDisplay] = useState("none");

  const LinkContainer = {
    w: {
      base: "100%",
      sm: "100%",
      md: "100%",
      lg: "auto",
      xl: "auto",
      "2xl": "auto",
    },
    gap: "5px",
    flexDir: "row",
    justifyContent: "center",
    alignItem: "center",
    display: {
      base: "none",
      sm: "none",
      md: "none",
      lg: "flex",
      xl: "flex",
      "2xl": "flex",
    },
  };

  const burgerButton = {
    display: {
      base: "flex",
      sm: "flex",
      md: "flex",
      lg: "none",
      xl: "none",
      "2xl": "none",
    },
    bg: "none",
    color: "orange.400",
    fontSize: "25px",
    ":hover": {
      bg: "none",
    },
    ":focus": {
      bg: "none",
    },
  };

  const MenuButton = {
    bg: "none",
    width: "auto",
    height: "45px",
    display: "inline-block",
    fontSize: "16px",
    borderRadius: "30px",
    color: "orange.400",
    fontWeight : 'normal',
    transition: "all ease-in-out 0.4s",
    ":hover": {
      color: "#fff",
      bg: "orange.400",
    },
  };

  const fullpageMenuBox = {
    display: display,
    position: "absolute",
    left: 0,
    top: 0,
    bg: "blue.900",
    width: "100vw",
    h: "100vh",
    flexDir: "column",
    justifyContent: "center !important",
    alignItems: "center",
  };

  return (
    <Flex>
      <Flex sx={LinkContainer}>
        <NavLink to="/">
          <Button sx={MenuButton}>Home</Button>
        </NavLink>
        <NavLink to="/services">
          <Button sx={MenuButton}>Services</Button>
        </NavLink>
        <NavLink to="/about">
          <Button sx={MenuButton}>About</Button>
        </NavLink>
        <NavLink>
          <Button sx={MenuButton}>Network</Button>
        </NavLink>
        <NavLink to="/projects">
          <Button sx={MenuButton}>Projects</Button>
        </NavLink>
        <Button sx={MenuButton}>Lingua</Button>
      </Flex>
      <Button
        sx={burgerButton}
        onClick={() => {
          changeDisplay("flex");
        }}
      >
        <HamburgerIcon />
      </Button>

      <Flex sx={fullpageMenuBox}>
        <Flex justifyContent={"flex-end"} minWidth={"300px"}>
          <Button sx={burgerButton} onClick={() => changeDisplay("none")}>
            <CloseIcon margin={"0 20px"} color={"#fff"}></CloseIcon>
          </Button>
        </Flex>
        <NavLink to="/">
          <Button
            sx={MenuButton}
            onClick={() => {
              changeDisplay("none");
            }}
          >
            Home
          </Button>
        </NavLink>
        <NavLink to="/services">
          <Button
            sx={MenuButton}
            onClick={() => {
              changeDisplay("none");
            }}
          >
            Services
          </Button>
        </NavLink>
        <NavLink to="/about">
          <Button
            sx={MenuButton}
            onClick={() => {
              changeDisplay("none");
            }}
          >
            About
          </Button>
        </NavLink>
        <NavLink>
          <Button
            sx={MenuButton}
            onClick={() => {
              changeDisplay("none");
            }}
          >
            Network
          </Button>
        </NavLink>
        <NavLink to="/projects">
          <Button
            sx={MenuButton}
            onClick={() => {
              changeDisplay("none");
            }}
          >
            Projects
          </Button>
        </NavLink>
        <Button sx={MenuButton}>Lingua</Button>
      </Flex>
    </Flex>
  );
};
