module.exports = {
	branches: ['main'],
	plugins: [
		[
			'@semantic-release/commit-analyzer',
			{
				releaseRules: [
					// A commit starting "feat: " is a minor release.
					{ type: 'feat', release: 'minor' },
					// Every commit matches this rule, so anything not matched above is a patch.
					// When several rules match, the highest release wins, so feat: still gives minor.
					{ release: 'patch' }
				]
			}
		],
		'@semantic-release/release-notes-generator',
		['@semantic-release/github', {
			"successComment": false,
			"failComment": false
		}]
	]
};
