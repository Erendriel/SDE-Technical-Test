import inquirer from "inquirer";

const menuOpts = [
  {
    type: "list",
    name: "opt",
    message: "What do you want to do?",
    choices: [
      {
        value: "1",
        name: `1. Upload Driver's File`,
      },
      {
        value: "2",
        name: `2. Show Driver's List`,
      },
      {
        value: "3",
        name: `3. Upload Shipment's File`,
      },
      {
        value: "4",
        name: `4. Show Shipment's List`,
      },
      {
        value: "5",
        name: `5. Show SS`,
      },
      {
        value: "0",
        name: "0. Exit",
      },
    ],
  },
];

export const inquirerMenu = async () => {
  console.clear();
  console.log("===========================");
  console.log("   Select an option");
  console.log("===========================");

  const { opt } = await inquirer.prompt(menuOpts);
  return opt;
};

export const pause = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: "Press enter to continue",
    },
  ];
  await inquirer.prompt(question);
};
export const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "file_path",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Please add a file";
        }
        return true;
      },
    },
  ];

  const { file_path } = await inquirer.prompt(question);
  return file_path;
};

export const confirm = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];
  const { ok } = await inquirer.prompt(question);
  return ok;
};
