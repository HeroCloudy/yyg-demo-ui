import inquirer, { QuestionCollection } from 'inquirer'

// 交互提示
const questions: QuestionCollection = [
  {
    name: 'componentName',
    message: 'Input the component name: ',
    default: ''
  },
  {
    name: 'description',
    message: 'Input the component description: ',
    default: ''
  },
  {
    type: 'list',
    name: 'componentType',
    message: 'Choose the component type: ',
    choices: [
      'tsx', 'vue'
    ]
  }
]

const createNewComponent = (componentName: string, description: string, componentType: string) => {
  console.log(componentName, description, componentType)
}

export const createComponent = () => {
  inquirer.prompt(questions).then(({ componentName, description, componentType }) => {
    createNewComponent(componentName, description, componentType)
  })
}
