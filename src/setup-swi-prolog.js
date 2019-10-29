const core = require('@actions/core')
const {installSWIProlog} = require('./installer')

main().catch(err => {
  core.setFailed(err.message)
})

async function main() {
  checkPlatform()

  const branch  = core.getInput('swi-prolog-branch', {required: false})
  const version = core.getInput('swi-prolog-version', {required: true})

  console.log(`##[group]Installing SWI-Prolog ${version}`)
  await installSWIProlog(branch,version)
  console.log(`##[endgroup]`)
}

function checkPlatform() {
  if (process.platform !== 'linux')
    throw new Error(
      '@logtalk-actions/setup-swi-prolog only supports Ubuntu Linux at this time'
    )
}
