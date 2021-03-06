import { fireEvent, render } from '@testing-library/react';
import App from '../App';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<App/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal).toHaveTextContent('4');
    
  })

  it('should add 1 to 4 and return 5', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const buttonAdd = container.getByTestId('add');
    const runningTotal = container.getByTestId('running-total');
    const buttonEquals = container.getByTestId('equals');
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal).toHaveTextContent('5');
  })

  it('should subtract 4 from 7 and get 3', () => {
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const buttonSubtract = container.getByTestId('subtract');
    const runningTotal = container.getByTestId('running-total');
    const buttonEquals = container.getByTestId('equals');
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal).toHaveTextContent('3');
  })

  it('should multiply 3 by 5 and get 15', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const buttonMultiply = container.getByTestId('multiply');
    const runningTotal = container.getByTestId('running-total');
    const buttonEquals = container.getByTestId('equals');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal).toHaveTextContent('15');
  })

  it('should divide 21 by 7 and get 3', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const buttonDivide = container.getByTestId('divide');
    const runningTotal = container.getByTestId('running-total');
    const buttonEquals = container.getByTestId('equals');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal).toHaveTextContent('3');
  })

  it('should return 20 when 2, 0 then equals is pressed', () => {
    const button2 = container.getByTestId('number2');
    const button0 = container.getByTestId('number0');
    const runningTotal = container.getByTestId('running-total');
    const buttonEquals = container.getByTestId('equals');
    fireEvent.click(button2);
    fireEvent.click(button0);
    fireEvent.click(buttonEquals);
    expect(runningTotal).toHaveTextContent('20');
  })

  it('should return 20 when 2 is multiplied by 5 then 10 is added', () => {
    const button2 = container.getByTestId('number2');
    const button5 = container.getByTestId('number5');
    const button1 = container.getByTestId('number1');
    const button0 = container.getByTestId('number0');
    const runningTotal = container.getByTestId('running-total');
    const buttonEquals = container.getByTestId('equals');
    const buttonAdd = container.getByTestId('add');
    const buttonMultiply = container.getByTestId('multiply');
    fireEvent.click(button2);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    fireEvent.click(buttonAdd);
    fireEvent.click(button1);
    fireEvent.click(button0);
    fireEvent.click(buttonEquals);
    expect(runningTotal).toHaveTextContent('20');
  })

  it('should clear the running total without affecting the calculation', () => {
    const button2 = container.getByTestId('number2');
    const buttonAdd = container.getByTestId('add');
    const buttonEquals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    const buttonClear = container.getByTestId('clear');
    fireEvent.click(button2);
    fireEvent.click(buttonAdd);
    fireEvent.click(button2);
    fireEvent.click(buttonEquals);
    fireEvent.click(buttonClear);
    expect(runningTotal).toHaveTextContent('0');
  })

  
})

