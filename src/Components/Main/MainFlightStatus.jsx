import React from "react";
import { Space, Table, Tag } from "antd";

export default function MainFlightStatus() {
  const { Column, ColumnGroup } = Table;
  const data = [
    {
      key: "1",
      depart: "Jakarta",
      depart_time: "10.30",
      arrival: "Singapore",
    },
    {
      key: "2",
      depart: "Jakarta",
      depart_time: "11.30",
      arrival: "Singapore",
    },
    {
      key: "3",
      depart: "Jakarta",
      depart_time: "12.30",
      arrival: "Singapopre",
    },
  ];
  return (
    <div className="container">
      <Table dataSource={data}>
        <ColumnGroup
          title={<h1 style={{ fontSize: "20px", fontWeight:"bold"}}>Flight Time Schedule</h1>}
        >
          <Column title="Keberangkatan" dataIndex="depart" key="depart" />
          <Column
            title="Waktu Keberangkatan"
            dataIndex="depart_time"
            key="depart_time"
          />
          <Column title="Kedatangan" dataIndex="arrival" key="arrival" />
        </ColumnGroup>
        {/* <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <a>Invite {record.la}</a>
              <a>Delete</a>
            </Space>
          )}
        /> */}
      </Table>
    </div>
  );
}
