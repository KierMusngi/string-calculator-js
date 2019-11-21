import StringCalculator from '../src/string-calculator';

test('Add empty string', () =>
{
    // Arrange
    let calculator = new StringCalculator();

    // Act
    let sum = calculator.Add("");

    // Assert
    expect(sum).toEqual(0);
});

test('Add single string number', () => 
{
    // Arrange
    let calculator = new StringCalculator();

    // Act
    let sum = calculator.Add("1");
    
    // Assert
    expect(sum).toEqual(1);
});

test('Add two string number delimited with comma', () => 
{
    // Arrange
    let calculator = new StringCalculator();

    // Act
    let sum = calculator.Add("1,2");

    // Assert
    expect(sum).toEqual(3);
});

test('Add unknown amount of string numbers delimited with commas', () => 
{
    // Arrange
    let calculator = new StringCalculator();

    // Act
    let sum = calculator.Add("1,2,3,4,5,6,7,8,9,10");

    // Assert
    expect(sum).toEqual(55);
});