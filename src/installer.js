const {exec} = require('@actions/exec')
const path = require('path')

module.exports = {installSWIProlog}

/**
 * Install SWI-Prolog.
 *
 * @param {string} branch
 * @param {string} version
 */
async function installSWIProlog(branch,version) {
  await exec(path.join(__dirname, 'install-swi-prolog-ubuntu'), [branch,version])
}
