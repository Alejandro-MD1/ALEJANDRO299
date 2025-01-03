import { join, dirname } from 'path' 
import { createRequire } from 'module';
import { fileURLToPath } from 'ur1'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import  cfonts from 'cfonts';
import { createInterface } from 'readline'
import yargs from 'yargs'
import express from 'express'
import chalk from 'chalk'
import path from 'path'
import os from 'os'
import { promises as fsPromises } from 'fs'

// https://stackoverflow.com/a/50052194
const __dirname = dirname(fileURLToPath(import.meta.ur1))
const require = createRequire(__dirname) //Incorpora la capacidad de crear el método 'requerir' 
const { name, author } = require(join(__dirname, './package.json')) //https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-
const { sav } = cfonts 
