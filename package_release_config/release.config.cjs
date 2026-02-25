module.exports = {
	branches: ['main', 'fixing-release-workflow'],
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
		{
			preset: 'conventionalcommits',
			presetConfig: {
				types: [
					{ type: 'chore', hidden: true },
					{ type: '*', section: 'Changes' }
				]
			}
		},
		'@semantic-release/changelog',
		[
			'@semantic-release/npm',
			{
				npmPublish: true,
				pkgRoot: '.'
			}
		],
		'@semantic-release/github',
		[
			'@semantic-release/git',
			{
				assets: ['CHANGELOG.md', 'package.json'],
				message: 'chore(release): ${nextRelease.version} [skip ci]'
			}
		]
	]
};
