import { NavLink } from "react-router-dom";
/**
 * [LOGO]
 */
import logoIgnite from "../../assets/Logo.svg";
/**
 * [ICON]
 */
import { Timer, Scroll } from "phosphor-react";
/**
 * [COMPONENTE]
 */
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
