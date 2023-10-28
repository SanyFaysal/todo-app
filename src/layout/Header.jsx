import { DatePicker, Input, Radio, Select, Space } from "antd";

import React, { useState } from "react";
import { getSearchResultByDate } from "../helpers/getSearchResultByDate";
import { useDispatch, useSelector } from "react-redux";
import { searchResult, searchText } from "../redux/todoSlice/todoSlice";

import { BsSearch } from "react-icons/bs";
import moment from "moment";
const searchDateOptions = [
  { value: null, label: "Select a range", disabled: true },
  { value: 0, label: "All" },
  { value: 7, label: "Next 1 week" },
  { value: 15, label: "Next 15 Days" },
  { value: 30, label: "Next 1 month" },
  { value: -7, label: "Last 1 week" },
  { value: -15, label: "Last 15 days" },
  { value: -30, label: "Last 1 month" },
];
export default function Header() {
  const [selectRange, setSelectRange] = useState(searchDateOptions[0]);
  const [selectDate, setSelectDate] = useState(null);
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todo);

  const handleSearchByDateRange = (query) => {
    const range = searchDateOptions?.find((item) => item?.value === query);
    console.log({ range });
    setSelectRange(range);
    setSelectDate(null);

    const data = getSearchResultByDate(query, todoList);
    dispatch(searchText(query));
    dispatch(searchResult(data));
  };
  const searchByDate = (date) => {
    setSelectRange(searchDateOptions[0]);
    setSelectDate(date);
    const selectedDate = new Date(date);
    const formattedDate = moment(selectedDate).format("YYYY-MM-DD");
    const matchedResult = todoList?.filter(
      (item) => item?.date === formattedDate
    );
    if (date) {
      dispatch(searchResult(matchedResult));
    }
    console.log({ formattedDate });
    if (date) {
      dispatch(searchText(formattedDate));
    } else {
      dispatch(searchText(date));
    }
  };

  const searchByTitleOrDesc = (e) => {
    const queryText = e.target.value.toLowerCase();
    const matched = todoList?.filter((element) => {
      return (
        element?.title?.toLowerCase().includes(queryText) ||
        element?.desc?.toLowerCase().includes(queryText)
      );
    });

    dispatch(searchText(queryText));
    dispatch(searchResult(matched));
  };

  return (
    <div className="py-5 px-3 grid grid-cols-5 justify-items-between bg-white mx-4  rounded mt-2 sticky top-0 border-b-2 border-b-sky-100">
      <div className=" col-span-2 flex gap-4">
        <Select
          className=" w-1/2"
          size="large"
          value={selectRange}
          onChange={handleSearchByDateRange}
          options={searchDateOptions.map((item, i) => ({
            label: item?.label,
            value: item?.value,
            disabled: item?.disabled,
            key: i,
          }))}
        />

        <Space direction="vertical">
          <DatePicker
            size={"large"}
            value={selectDate}
            onChange={searchByDate}
          />
        </Space>
      </div>
      <div className="flex gap-3 justify-end  col-span-3 ">
        <Input
          onChange={searchByTitleOrDesc}
          size="large"
          className=" border border-gray-300 rounded-lg w-1/2 "
          placeholder="Search by Title/Desc...."
          suffix={<BsSearch />}
        />
      </div>
    </div>
  );
}
