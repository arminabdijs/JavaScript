let taskList = [
  { id: 1, name: "armin", task: ["ui/ux"] },
  { id: 2, name: "amir", task: ["frunEnd"] },
  { id: 3, name: "mohammad", task: ["Backend"] },
];

let nameKarmand = prompt("Enter the employee's name: ");

let employee = taskList.find(k => k.name.toLowerCase() === nameKarmand.toLowerCase());

if (employee) {
    let newTaskKarmand = prompt("Enter the employee's task: ");
    employee.task.push(newTaskKarmand);
    console.log("Updated task list:", taskList);
} else {
    console.log("You do not have such an employee");
}