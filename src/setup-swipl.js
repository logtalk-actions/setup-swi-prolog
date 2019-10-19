const core = require('@actions/core')
const {exec} = require('@actions/exec')
const {installSWIPL} = require('./installer')

main().catch(err => {
  core.setFailed(err.message)
})

async function main() {
  checkPlatform()

  const swiplBranch = core.getInput('swipl-branch', {required: true})
  const swiplSpec = core.getInput('swipl-version', {required: true})

  console.log(`##[group]Installing SWI-Prolog ${swiplSpec}`)
  await installSWIPL(swiplBranch,swiplSpec)
  console.log(`##[endgroup]`)
}

function checkPlatform() {
  if (process.platform !== 'linux')
    throw new Error(
      '@logtalk-actions/setup-swipl only supports Ubuntu Linux at this time'
    )
}
