import { Select } from "antd";
import Search from "antd/es/input/Search";
import React from "react";

export default function Header() {
  const provinceData = [
    { value: 0, label: "Select a range", disabled: true },
    { value: 7, label: "Next 1 week" },
    { value: 15, label: "Next 15 Days" },
    { value: 30, label: "Next 1 month" },
    { value: -7, label: "Last 1 week" },
    { value: -15, label: "Last 15 days" },
    { value: -30, label: "Last 1 month" },
  ];
  const onSearch = () => {};
  return (
    <div className="py-5 px-3 flex justify-between bg-white mx-4  rounded mt-2 sticky top-0 border-b-2 border-b-sky-100">
      <Select
        className="w-1/3 h-10"
        defaultValue={provinceData[0]}
        // onChange={handleProvinceChange}
        options={provinceData.map((province) => ({
          label: province?.label,
          value: province?.value,
          disabled: province?.disabled,
        }))}
      />
      <Search
        placeholder="Search by tile or description"
        allowClear
        enterButton="Search"
        size="large"
        className="bg-sky-500 rounded-lg w-1/3"
        onSearch={onSearch}
      />
    </div>
  );
}
