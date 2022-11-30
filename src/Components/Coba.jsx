import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";
const { Option } = Select;

const App = ({ value = {}, onChange }) => {
  // const PriceInput = ({ value = {}, onChange }) => {
  //   const [number, setNumber] = useState(0);
  const [adults, setAdults] = useState(0);

  const [currency, setCurrency] = useState("rmb");
  const triggerChange = (changedValue) => {
    onChange?.({
      adults,
      currency,
      ...value,
      ...changedValue,
    });
  };
  const onNumberChange = (e) => {
    const newNumber = parseInt(e.target.value || "0", 10);
    // const newNumber = parseInt(e.target.value || adults);
    if (Number.isNaN(adults)) {
      return;
    }
    if (!("number" in value)) {
      setAdults(newNumber);
    }
    triggerChange({
      number: newNumber,
    });
  };
  const onCurrencyChange = (newCurrency) => {
    if (!("currency" in value)) {
      setCurrency(newCurrency);
    }
    triggerChange({
      currency: newCurrency,
    });
  };
  const adultIncrement = () => {
    
    let value = 9;
    if (adults >= value) {
      value = 9;
    } else {
      value = adults;
    }
    setAdults(value + 1);
  
  };
  const adultDecrement = () => {
    
    let value = 1;
    if (adults <= value) {
      value = 1;
    } else {
      value = adults;
    }
    setAdults(value - 1);

  };

  const onFinish = (values) => {
    console.log("Received values from form: ", values);
  };
  const checkPrice = (_, value) => {
    if (value.number > 0) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Price must be greater than zero!"));
  };
  return (
    <Form
      name="customized_form_controls"
      layout="inline"
      onFinish={onFinish}
      initialValues={{
        price: {
          number: 0,
          currency: "rmb",
        },
      }}
    >
      <Form.Item
        name="price"
        label="Price"
        rules={[
          {
            validator: checkPrice,
          },
        ]}
      >
        <span>
          <Button onClick={adultDecrement}>-</Button>
          <Button onClick={adultIncrement}>+</Button>
          <Input
            type="text"
            value={value.adults || adults}
            onChange={onNumberChange}
            style={{
              width: 100,
            }}
          />
          <Select
            value={value.currency || currency}
            style={{
              width: 80,
              margin: "0 8px",
            }}
            onChange={onCurrencyChange}
          >
            <Option value="rmb">RMB</Option>
            <Option value="dollar">Dollar</Option>
          </Select>
        </span>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
