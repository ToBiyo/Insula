//chakra
import { Flex, Image } from "@chakra-ui/react";
//react router
import { Outlet } from "react-router-dom";
//components
import { MenuComp } from "./Menu";

//assets
import logo from "../../assets/img/logo.svg";

export const Nav = () => {

  const Menu = {
    w: "80%",
    h: "70px",
    margin: "0 auto",
    justifyContent: "space-between",
    alignItems: "center"
  };
  const logoImage = {
    w: {base : '50px', md : '70px'},
  };
  const MainContainer = {
    flexDir : 'column',
    w: '100vw',
    h : '100vh'
  }

  return (
    <Flex sx={MainContainer}>
      <header>
      <nav
        style={{
          width: "100vw",
          position: "absolute",
          zIndex: 2,
          left: "0"
        }}
      >
        <Flex className="menu" sx={Menu}>
          <Flex>
            <a href="">
              <Image src={logo} sx={logoImage} />
            </a>
          </Flex>
          <MenuComp gap={'25px'}></MenuComp>
        </Flex>
      </nav>
    </header>
    <main>
        <Outlet />
    </main>
    </Flex>
  );
};
