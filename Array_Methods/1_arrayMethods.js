const users = [
  {
    firstName: 'Sam',
    lastName: 'Hughes',
    DOB: '07/07/1978',
    department: 'Development',
    salary: '45000',
  },
  {
    firstName: 'Terri',
    lastName: 'Bishop',
    DOB: '02/04/1989',
    department: 'Development',
    salary: '35000',
  },
  {
    firstName: 'Jar',
    lastName: 'Burke',
    DOB: '11/01/1985',
    department: 'Marketing',
    salary: '38000',
  },
  {
    firstName: 'Julio',
    lastName: 'Miller',
    DOB: '12/07/1991',
    department: 'Sales',
    salary: '40000',
  },
  {
    firstName: 'Chester',
    lastName: 'Flores',
    DOB: '03/15/1998',
    department: 'Development',
    salary: '41000',
  },
  {
    firstName: 'Madison',
    lastName: 'Marshall',
    DOB: '09/22/1980',
    department: 'Sales',
    salary: '32000',
  },
  {
    firstName: 'Ava',
    lastName: 'Pena',
    DOB: '11/02/1986',
    department: 'Development',
    salary: '38000',
  },
  {
    firstName: 'Gabriella',
    lastName: 'Steward',
    DOB: '08/26/1994',
    department: 'Marketing',
    salary: '46000',
  },
  {
    firstName: 'Charles',
    lastName: 'Campbell',
    DOB: '09/04/1977',
    department: 'Sales',
    salary: '42000',
  },
  {
    firstName: 'Tiffany',
    lastName: 'Lambert',
    DOB: '05/11/1990',
    department: 'Development',
    salary: '34000',
  },
  {
    firstName: 'Antonio',
    lastName: 'Gonzales',
    DOB: '03/24/1985',
    department: 'Office Managment',
    salary: '49000',
  },
  {
    firstName: 'Aaron',
    lastName: 'Garrett',
    DOB: '09/04/1985',
    department: 'Development',
    salary: '39000',
  },
];

// 1)Map Function -----  to find all users firstName & lastName
console.log(users.map((user) => `${user.firstName} ${user.lastName}`));

// 2)Filter Function -----  to find users age above 30
console.log(
  users.filter(
    (user) => new Date().getFullYear() - new Date(user.DOB).getFullYear() > 30
  )
);

// 3)Sort Function -----  to find users age oldest to youngest
console.log(
  users.sort((userA, userB) => new Date(userA.DOB) - new Date(userB.DOB))
);

// 4)Reduce Function -----  to add all users salary
console.log(
  users.reduce((accumulator, user) => accumulator + parseInt(user.salary), 0)
);

// Reduce Function -----  to find average salary of all users
console.log(
  users.reduce((accumulator, user) => accumulator + parseInt(user.salary), 0) /
    users.length
);

// Reduce Function -----  to find all users Department with numbers
console.log(
  users.reduce(
    (accumulator, user) => ({
      ...accumulator,
      [user.department]: accumulator[user.department] + 1 || 1,
    }),
    {}
  )
);
