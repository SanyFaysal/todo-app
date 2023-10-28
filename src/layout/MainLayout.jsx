import { useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { RiPlayListAddFill } from "react-icons/ri";
import { BsClipboardData } from "react-icons/bs";
import Header from "./Header";
const { Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider className="hidden lg:block">
        <div className="demo-logo-vertical " />
        <Menu
          mode="inline"
          theme="dark"
          defaultSelectedKeys={["1"]}
          className="px-2 mt-5 "
          items={[
            {
              key: "1",
              icon: (
                <p>
                  <AiOutlineUnorderedList className="text-lg" />{" "}
                  <Link to={"/"} />
                </p>
              ),
              label: "Todo List",
            },
            {
              key: "2",
              icon: (
                <p>
                  <RiPlayListAddFill className="text-lg" />{" "}
                  <Link to={"/categories"} />
                </p>
              ),
              label: "Todo Categories",
            },
            {
              key: "3",
              icon: (
                <p>
                  <RiPlayListAddFill className="text-lg" />{" "}
                  <Link to={"/add-todo"} />
                </p>
              ),
              label: "Add Todo",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Content className="h-[100vh] overflow-y-auto  bg-gray-100">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
