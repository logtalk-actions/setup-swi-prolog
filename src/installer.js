const {exec} = require('@actions/exec')
const path = require('path')

module.exports = {installSWIPL}

/**
 * Install Logtalk.
 *
 * @param {string} version
 */
async function installSWIPL(branch,version) {
  await exec(path.join(__dirname, 'install-swipl-ubuntu'), [branch,version])
}
