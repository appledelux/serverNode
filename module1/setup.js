'use strict'

const db = require('./')
const inquirer = require('inquirer')
const chalk = require('chalk')
const debug = require('debug')('module1:db:setup')

const prompt = inquirer.createPromptModule()
async function setup() {
    const answer = await prompt([
        {
            type: 'confirm',
            name: 'setup',
            message: 'This is will destroy your database, are you sure?'
        }
    ])

    if (!answer.setup) {
    return console.log('Nothing happened :)')
    }
    const config = {
        database: process.env.DB_NAME || 'demo',
        username: process.env.DB_USER || 'appledelux',
        password: process.env.DB_PASS || '2484FREsas*',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        loggin: s => debug(s),
        setup: true
    }
    await db(config).catch(handleFatalError)

    console.log('Success!')
    process.exit(0)
}

function handleFatalError(err) {
    console.log(`${chalk.red('[fatal error]')} ${err.message}`)
    console.log(err.stack)
    process.exit(1)
}

setup()
