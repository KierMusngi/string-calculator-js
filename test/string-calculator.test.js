import StringCalculator from '../src/string-calculator';

test('Add empty string', () =>
{
    // Arrange
    let sum;
    let calculator = new StringCalculator();

    // Act
    sum = calculator.Add("");

    // Assert
    expect(sum).toEqual(0);
});