module.exports = {
	branches: ['main', 'FAL-219/search-api-dev-pipeline'],
	plugins: [
		[
			'@semantic-release/commit-analyzer',
			{
				releaseRules: [
					// Fallback: if commit has no type, treat it as a patch release
					{ release: 'patch' }
				]
			}
		],
		'@semantic-release/release-notes-generator',
	]
};
