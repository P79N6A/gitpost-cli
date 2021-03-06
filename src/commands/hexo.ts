import {Command} from '@oclif/command'
const hexoCli = require('hexo-cli')
const minimist = require('minimist')
const path = require('path')
export default class Hexo extends Command {
  static description = `Proxy hexo commands,support all hexo commands
View more at: https://hexo.io/zh-cn/docs/commands`

  static examples = [
    "$ gitpost hexo new 'Hello'"
  ]

  static flags = {
  }

  async run() {
    hexoCli(path.resolve(process.cwd(), '.hexo'), minimist(process.argv.slice(3)))
  }
}
