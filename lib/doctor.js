const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const CodotypeRuntime = require('@codotype/runtime')

async function doctor (options) {

  // Pulls in requisite paths for codotype runtime
  const generatorMetaPath = path.resolve(process.cwd(), './meta.json') // TODO - constantize MAGIC STRING

  // Invoke runtime directly with parameters
  const runtime = new CodotypeRuntime()

  // Registers this generator via relative path
  runtime.registerGenerator({ absolute_path: process.cwd() })

  // Logs success message if nothing blows up
  console.log(`${chalk.cyan(`codotype doctor`)} says everything is ${chalk.green(`splendid`)}.`)
  return
}

module.exports = (...args) => {
  return doctor(...args).catch(err => {
    // TODO - implement better error handling
    console.log(`${chalk.red(`ERROR`)} - something went wrong with ${chalk.cyan(`codotype doctor`)}`)
    console.log(err)
    if (!process.env.CODOTYPE_CLI_TEST) {
      process.exit(1)
    }
  })
}