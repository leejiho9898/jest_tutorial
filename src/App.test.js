import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);
  //screem object를 이용해서 원하는 엘레멘트에 접근
  const counterElement = screen.getByTestId("counter");

  //id가 counter인 엘레멘트의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  render(<App />);
  //screem object를 이용해서 원하는 엘레멘트에 접근
  const btnEle = screen.getByTestId("minusBtn");

  //id가 minusBtn인 엘레멘트의 텍스트가 0인지 테스트
  expect(btnEle).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);
  //위와동일
  const btnEle = screen.getByTestId("plusBtn");

  expect(btnEle).toHaveTextContent("+");
});

test("wnen plus button is pressed, the counter changes to 1", () => {
  render(<App />);
  //위와동일
  const btnEle = screen.getByTestId("plusBtn");
  fireEvent.click(btnEle);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test("wnen minus button is pressed, the counter changes to 1", () => {
  render(<App />);
  //위와동일
  const btnEle = screen.getByTestId("minusBtn");
  fireEvent.click(btnEle);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});

test("Prevent the -,+ btn from being pressed when theon/off button is clicked", () => {
  render(<App />);
  //screem object를 이용해서 원하는 엘레멘트에 접근
  const Element = screen.getByTestId("onOffBtn");
  fireEvent.click(Element);

  const btnMEle = screen.getByTestId("minusBtn");
  const btnPEle = screen.getByTestId("plusBtn");
  expect(btnMEle,).toBeDisabled();
});
