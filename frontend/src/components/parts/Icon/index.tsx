import React, { FC } from "react";
import { IconProps } from "@mui/material/Icon";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SearchIcon from "@mui/icons-material/Search";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";

export type IconType = "list" | "search" | "sales";
type BaseProps = {
  icon: IconType;
};
type Props = BaseProps & Pick<IconProps, "color" | "fontSize">;

const iconMap = {
  search: SearchIcon,
  list: ListAltIcon,
  sales: AutoGraphOutlinedIcon,
};

export const Icon: FC<Props> = ({ icon, color, fontSize }) => {
  const Icon = iconMap[icon] || null;
  return Icon && <Icon color={color} fontSize={fontSize} />;
};