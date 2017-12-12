// var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
// var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
// var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
// var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
// var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
// var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

// var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT


// create a class for each employee.

class Employee {
  constructor(name, employeeNumber, annualSalary, reviewRating) {
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  }
}

var atticus = new Employee ('Atticus', '2405', '47000', 3);
var jem = new Employee ("Jem", "62347", "63500", 4);
var boo = new Employee ("Boo", "11435", "54000", 3);
var scout = new Employee ("Scout", "6243", "74750", 5);
var robert = new Employee ("Robert", "26835", "66000", 1);
var mayella = new Employee ("Mayella", "89068", "35000", 2);

var employees = [ atticus, jem, boo, scout, robert, mayella ];

console.log(employees);


//write a function that takes employee object as argument and returns a new object.

function Bonus(emp) {
// name should return name.
  this.name = emp.name;
  // bonusPercentage if else statment based on rating, tenure, annual income, and contraints on bonus amount
  function getPercentage() {
    var basePercent = 0;

    // check reviewRating
    if (emp.reviewRating <= 2) {
      basePercent = 0;
      // bonus 0%
    } else if (emp.reviewRating === 3) {
      basePercent = 0.04;
      // bonus 4%
    } else if (emp.reviewRating === 4) {
        basePercent = 0.06;
        // bonus 6%
    } else {
      basePercent = 0.10;
      // bonus 10%
    }

    // check employeeNumber length
    if (emp.employeeNumber.length === 4) {
      // if 4 add 0.05 to bonusPercentage
      basePercent += 0.05;
    }

    // check annual income
    if (emp.annualSalary > 65000) {
      // if over 65000, remove 1% from percent
      basePercent -= 0.01;
    }

    // if above 13%, return 13%
    if (basePercent > 0.13) {
      basePercent = 0.13;
      // if below 0%, return 0%
    } else if (basePercent < 0) {
      basePercent = 0;
    }

    return basePercent;
  }

  // reference the getPercentage function
  this.bonusPercentage = getPercentage();

  // totalBonus
    // get bonusPercentage
    // percentage * annualSalary
    // Math.round()
  this.totalBonus = Math.round(Number(this.bonusPercentage * emp.annualSalary));

  // totalComp
    // annualSalary + totalBonus
  this.totalComp = Number(emp.annualSalary) + this.totalBonus;
}

// looping over employees array
// running Bonus contructor each time

for (var i = 0; i < employees.length; i++) {
  console.log(new Bonus(employees[i]));
}
