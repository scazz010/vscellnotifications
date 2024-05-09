// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let disposable = vscode.commands.registerCommand('cellnotifications.toggleSoundAlerts', function () {
		const configuration = vscode.workspace.getConfiguration()
		const currentSetting = configuration.get('accessibility.signals.notebookCellCompleted')
		currentSetting.sound = currentSetting.sound == 'on' ? 'off' : 'on'
		configuration.update('accessibility.signals.notebookCellCompleted', currentSetting, vscode.ConfigurationTarget.Workspace)


		// Display a message box to the user
		vscode.window.showInformationMessage(`Notifications switched ${currentSetting.sound}`);
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
