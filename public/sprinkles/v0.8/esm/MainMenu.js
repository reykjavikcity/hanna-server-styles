import "../_chunks/initHannaNamespace-f4f98843.js";
import { E, q, a as qq, b as focusElm } from "../_chunks/qj-1c8d4095.js";
import "../_chunks/compat.module-0843eda4.js";
import { f as focusElement } from "../_chunks/getSVGtext-b918ded2.js";
import { g as getTexts } from "../_chunks/i18n-a7278b6d.js";
import { d as domid, g as getFormatMonitor } from "../_chunks/_useMobileMenuToggling-ec254f95.js";
import { g as getLang } from "../_chunks/getLang-8d69057b.js";
const defaultMobileMenuTogglerTexts = {
  is: {
    togglerLabel: "Opna/loka Aðalvalmynd",
    closeMenuLabel: "Loka",
    closeMenuLabelLong: "Loka aðalvalmynd"
  },
  en: {
    togglerLabel: "Toggle Main Menu",
    closeMenuLabel: "Close",
    closeMenuLabelLong: "Close main menu"
  },
  pl: {
    togglerLabel: "Otwórz/zamknij menu główne",
    closeMenuLabel: "Zamknij",
    closeMenuLabelLong: "Zamknij menu główne"
  }
};
const defaultMainMenuTexts = {
  is: {
    title: "Aðalvalmynd",
    homeLabel: "Forsíða",
    backToMenu: "Loka",
    backToMenuLong: "Til baka í valmynd"
  },
  en: {
    title: "Main Menu",
    homeLabel: "Home page",
    backToMenu: "Close",
    backToMenuLong: "Close and return to menu"
  },
  pl: {
    title: "Menu główne",
    homeLabel: "Strona główna",
    backToMenu: "Zamknij",
    backToMenuLong: "Zamknij i wróć do menu"
  }
};
const formatMonitor = getFormatMonitor();
const HamburgerMedias = {
  phone: 1,
  phablet: 1,
  tablet: 1
};
const htmlClass = document.documentElement.classList;
const addMenuToggler = (menuElm, lang) => {
  menuElm.tabIndex = -1;
  const menuId = menuElm.id || domid();
  if (!menuElm.id) {
    menuElm.id = menuId;
  }
  const txt = getTexts({
    lang
  }, defaultMobileMenuTogglerTexts);
  const togglerButton = E("button", {
    className: "MobileMenuToggler",
    onClick: (e) => {
      if (isActive) {
        e.preventDefault();
        isOpen ? closeMenu() : openMenu();
      }
    },
    "aria-controls": menuId,
    "aria-pressed": "false",
    lang
  }, txt.togglerLabel);
  const closeButton = E("button", {
    className: "MobileMenuToggler__closebutton",
    "aria-label": txt.closeMenuLabelLong,
    onClick: () => closeMenu(),
    lang
  }, txt.closeMenuLabel);
  let isOpen = false;
  let isActive = false;
  const activateMenu = () => {
    if (isActive) {
      return;
    }
    htmlClass.add("menu-is-active");
    htmlClass.add("menu-is-closed");
    menuElm.before(togglerButton);
    menuElm.append(closeButton);
    isActive = true;
  };
  const dectivateMenu = () => {
    if (!isActive) {
      return;
    }
    isOpen && closeMenu();
    htmlClass.remove("menu-is-closed");
    htmlClass.remove("menu-is-active");
    togglerButton.remove();
    closeButton.remove();
    isActive = false;
  };
  const openMenu = () => {
    htmlClass.add("menu-is-open");
    htmlClass.remove("menu-is-closed");
    isOpen = true;
    togglerButton.setAttribute("aria-pressed", `${isOpen}`);
    focusElement(menuElm);
  };
  const closeMenu = () => {
    htmlClass.add("menu-is-closed");
    htmlClass.remove("menu-is-open");
    isOpen = false;
    togglerButton.setAttribute("aria-pressed", `${isOpen}`);
    focusElement(togglerButton);
  };
  const onFormatChange = (media) => {
    const becameHamburger = HamburgerMedias[media.is] && !HamburgerMedias[media.was || ""];
    const leftHamburger = !HamburgerMedias[media.is] && HamburgerMedias[media.was || ""];
    if (becameHamburger) {
      activateMenu();
    } else if (leftHamburger) {
      dectivateMenu();
    }
  };
  formatMonitor.subscribe(onFormatChange);
  return () => {
    formatMonitor.unsubscribe(onFormatChange);
    dectivateMenu();
  };
};
let laggyRemoval;
const deactivatePanel = ({
  panelElm,
  titleButton,
  menuButton
}, instant) => {
  const remove = () => {
    panelElm.classList.remove("PrimaryPanel--active");
    titleButton && titleButton.removeAttribute("aria-pressed");
  };
  if (instant) {
    remove();
  } else {
    laggyRemoval = setTimeout(remove, 1e3);
  }
  menuButton && menuButton.removeAttribute("aria-pressed");
};
const activatePanel = ({
  panelElm,
  titleButton,
  menuButton
}) => {
  clearTimeout(laggyRemoval);
  panelElm.classList.add("PrimaryPanel--active");
  titleButton && titleButton.setAttribute("aria-pressed", "true");
  menuButton && menuButton.setAttribute("aria-pressed", "true");
};
const setDocumentEvents = ({
  escHandler,
  clickHandler
}) => {
  document.addEventListener("keydown", escHandler);
  document.addEventListener("click", clickHandler, true);
};
const removeDocumentEvents = ({
  escHandler,
  clickHandler
}) => {
  document.removeEventListener("keydown", escHandler);
  document.removeEventListener("click", clickHandler, true);
};
const getMenuUpdater = (data) => function updateMenu(newActive, setFocus = true) {
  const {
    activePanel,
    backToMenuButton,
    container
  } = data;
  delete container.dataset.pristine;
  if (newActive === activePanel) {
    newActive = void 0;
  }
  const htmlElm = document.documentElement;
  const htmlElmDataset = htmlElm.dataset;
  if (!newActive) {
    backToMenuButton.remove();
    data.container.classList.remove("MainMenu__panelsWrap--active");
    removeDocumentEvents(data);
    htmlElm.scrollTop = parseInt(htmlElmDataset.scrollTop || "") || 0;
    delete htmlElmDataset.scrollTop;
    delete htmlElmDataset.megaPanelActive;
  } else {
    data.container.classList.add("MainMenu__panelsWrap--active");
    newActive.panelElm.append(backToMenuButton);
    if (!activePanel) {
      setDocumentEvents(data);
      htmlElmDataset.scrollTop = String(htmlElm.scrollTop);
      htmlElm.scrollTop = 0;
      htmlElmDataset.megaPanelActive = "";
    }
  }
  if (activePanel) {
    deactivatePanel(activePanel, !!newActive);
    data.activePanel = void 0;
  }
  if (newActive) {
    activatePanel(newActive);
    data.activePanel = newActive;
  }
  if (setFocus) {
    setTimeout(() => {
      if (newActive) {
        focusElm.focusElm(newActive.panelElm);
      } else if (activePanel) {
        focusElm.focusElm(activePanel.menuButton);
      }
    }, 100);
  }
};
const initMainMenu = (menuElm, lang) => {
  const txt = getTexts({
    lang
  }, defaultMainMenuTexts);
  const megaContainer = q(".MainMenu__panelsWrap", menuElm);
  if (!megaContainer) {
    return;
  }
  megaContainer.dataset.pristine = "true";
  qq(".PrimaryPanel", megaContainer).forEach((panelElm) => {
    const titleElm = q(".PrimaryPanel__title", panelElm);
    if (!titleElm) {
      return;
    }
    const menuLink = panelElm.id && q(`a.MainMenu__link[href$="#${panelElm.id}"]`, menuElm) || void 0;
    const panelData = {
      panelElm,
      titleButton: panelElm.id ? E("button", {
        className: "MainMenu__mega__title-toggler",
        onClick: () => updateMenu(panelData, false),
        "aria-controls": panelElm.id
      }, titleElm.textContent) : void 0,
      menuButton: menuLink && E("button", {
        className: "MainMenu__link",
        onClick: () => updateMenu(panelData),
        "aria-controls": panelElm.id,
        "aria-label": menuLink.getAttribute("aria-label")
      }, menuLink.textContent)
    };
    if (panelData.titleButton) {
      titleElm.textContent = "";
      titleElm.append(panelData.titleButton);
    }
    if (menuLink && panelData.menuButton) {
      menuLink.replaceWith(panelData.menuButton);
    }
  });
  const megaData = {
    container: megaContainer,
    activePanel: void 0,
    backToMenuButton: E("button", {
      className: "MainMenu__megapanel__backtomenu",
      onClick: () => closeMenu(),
      "aria-label": txt.backToMenuLong
    }, txt.backToMenu),
    escHandler: (e) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    },
    clickHandler(e) {
      if (!menuElm.contains(e.target)) {
        closeMenu();
      }
    }
  };
  const updateMenu = getMenuUpdater(megaData);
  const closeMenu = () => updateMenu(void 0);
  const onFormatChange = (media) => {
    const lefTopMenu = !{
      netbook: 1,
      wide: 1
    }[media.is] && {
      netbook: 1,
      wide: 1
    }[media.was || ""];
    if (lefTopMenu) {
      closeMenu();
    }
  };
  formatMonitor.subscribe(onFormatChange);
  return () => {
    formatMonitor.unsubscribe(onFormatChange);
    removeDocumentEvents(megaData);
  };
};
window.Hanna.makeSprinkle({
  name: "MainMenu",
  init: (menuElm) => {
    const lang = getLang(menuElm);
    const menuTogglerTeardown = addMenuToggler(menuElm, lang);
    const mainMenuTeardown = initMainMenu(menuElm, lang);
    return () => {
      menuTogglerTeardown();
      mainMenuTeardown && mainMenuTeardown();
    };
  },
  unmount: (menuElm, teardown) => {
    teardown();
  }
});
