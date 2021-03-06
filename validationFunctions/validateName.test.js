const validateName = require("./validateName");

describe("Function: validateName", () => {
  it("Should return false when type is not string", () => {
    // Arrange
    const badName = [[], {}, null, undefined];
    // Act
    badName.forEach(name => {
      // Assert
      const valid = validateName(name);
      expect(valid).toBe(false);
    });
  });

  it("Should return true when the input is non-empty and ASCII", () => {
    //Arrange
    const goodName = ["Joe", "Anisha", "Django!"];
    //Act
    goodName.forEach(name => {
      //Assert
      const valid = validateName(name);
      expect(valid).toBe(true);
    });
  });

  it("Should return false if string is empty or contains only blank chars", () => {
    //Arrange
    const badNames = ["", " ", "       "];
    //Act
    badNames.forEach(name => {
      const valid = validateName(name);
      expect(valid).toBe(false);
    });
    //Assert
  });

  it("Should return false if string contains non Ascii chars", () => {
    //Arrange
    const badNames = ["§", "¥", "«® ¢"];
    //Act
    badNames.forEach(name => {
      //Assert
      const valid = validateName(name);
      expect(valid).toBe(false);
    });
  });
});
