import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { IconButton } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {
  const options = ["English", "Spanish", "French", "German", "Hindi"];

  const { t, i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    i18n.changeLanguage(options[index].slice(0, 2).toLowerCase());
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="lock-button"
        aria-controls="lock-menu"
        aria-haspopup="true"
        color="inherit"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          fontSize: "1rem",
        }}
        onClick={handleClickListItem}
      >
        <LanguageIcon />
        {t(`languages.${options[selectedIndex].toLowerCase()}`)}
      </IconButton>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {t(`languages.${option.toLowerCase()}`)}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default LanguageDropdown;
