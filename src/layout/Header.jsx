import { DatePicker, Input, Radio, Select, Space } from "antd";
import Search from "antd/es/input/Search";
import React from "react";
import { getSearchResultByDate } from "../helpers/getSearchResultByDate";
import { useDispatch, useSelector } from "react-redux";
import { searchResult, searchText } from "../redux/todoSlice/todoSlice";
import { RiSearchFill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";

export default function Header() {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todo);
  const searchDateOptions = [
    { value: 0, label: "Select a range", disabled: true },
    { value: 7, label: "Next 1 week" },
    { value: 15, label: "Next 15 Days" },
    { value: 30, label: "Next 1 month" },
    { value: -7, label: "Last 1 week" },
    { value: -15, label: "Last 15 days" },
    { value: -30, label: "Last 1 month" },
    { value: 0, label: "All" },
  ];
  const onSearch = () => {};
  const handleSearchByDate = (query) => {
    const data = getSearchResultByDate(query, todoList);
    dispatch(searchText(query));
    dispatch(searchResult(data));
  };
  return (
    <div className="py-5 px-3 grid grid-cols-5 justify-items-between bg-white mx-4  rounded mt-2 sticky top-0 border-b-2 border-b-sky-100">
      <div className=" col-span-2 flex gap-4">
        <Select
          className=" w-1/2"
          size="large"
          defaultValue={searchDateOptions[0]}
          onChange={handleSearchByDate}
          options={searchDateOptions.map((item, i) => ({
            label: item?.label,
            value: item?.value,
            disabled: item?.disabled,
            key: i,
          }))}
        />

        <Space direction="vertical">
          <DatePicker size={"large"} />
        </Space>
      </div>
      <div className="flex gap-3 justify-end  col-span-3 ">
        <Input
          size="large"
          className=" border border-gray-300 rounded-lg w-1/3 "
          placeholder="Search by Title/Desc...."
          suffix={<BsSearch />}
        />

        <button className="col-span-1 border px-5 rounded-lg">
          Reset Search
        </button>
      </div>
    </div>
  );
}
