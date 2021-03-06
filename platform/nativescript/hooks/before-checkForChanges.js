module.exports = function(hookArgs, $errors) {
  const bundle =
    hookArgs &&
    hookArgs.projectChangesOptions &&
    hookArgs.projectChangesOptions.bundle
  if (!bundle) {
    $errors.failWithoutHelp(
      "Nativescript-vue doesn't work without --bundle option. Please specify --bundle option to the command and execute it again."
    )
  }
}
