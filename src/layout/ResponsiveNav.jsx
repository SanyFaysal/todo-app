import { Dropdown, Space } from "antd";
import React from "react";
import {
  AiOutlineAppstore,
  AiOutlineMenu,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { RiPlayListAddFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function ResponsiveNav() {
  const navigate = useNavigate();
  const onClick = ({ key }) => {
    if (key == "1") navigate("/");
    if (key == "2") navigate("/categories");
    if (key == "3") navigate("/add-todo");
  };
  const items = [
    {
      key: "1",
      icon: (
        <p>
          <AiOutlineUnorderedList className="text-lg" />
        </p>
      ),
      label: "Todo List",
      link: "/",
    },
    {
      link: "/categories",
      key: "2",
      icon: (
        <p>
          <AiOutlineAppstore className="text-lg" />
        </p>
      ),
      label: "Todo Categories",
    },
    {
      key: "3",
      icon: (
        <p>
          <RiPlayListAddFill className="text-lg" />
        </p>
      ),
      label: "Add Todo",
      link: "/add-todo",
    },
  ];
  return (
    <div className="border px-3 py-2 rounded-lg lg:hidden">
      <Dropdown menu={{ items, onClick }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <AiOutlineMenu className="text-xl" />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
}
