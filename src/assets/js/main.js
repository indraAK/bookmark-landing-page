import { stickyHeader } from "./stickyHeader";
import { tabs } from "./tabs";
import { accordion } from "./accordion";
import { formValidation } from "./formValidation";
import { toggleMobileNav } from "./toggleMobileNav";

export const initApp = () => {
   toggleMobileNav();
   stickyHeader();
   accordion();
   tabs();
   formValidation();
}