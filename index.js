#!/usr/bin/env node

const { white, bold, blueBright } = require('colorette');

const id = 'smkamranqadri';
const title = 'Technical Lead';
const company = 'Mikaels Labs';
const name = 'Kamran Qadri';

const work = white(`${title} @ ${blueBright(company)}`);
const community = `${blueBright('  Community Manager')} ${white(
  'at devncode'
)}`;
const twitter = blueBright(`https://twitter.com/${id}`);
const linkedIn = blueBright(`https://linkedin.com/in/${id}`);
const github = blueBright(`https://github.com/${id}`);
const npx = white('npx kamranqadri');

const newline = '\n';
const heading = `${white(`              ${name} /`)} ${blueBright(id)}`;
const communiting = `${white(bold('  Community:'))}${community}`;
const working = `${white(bold('       Work:'))}  ${work}`;
const linkedining = `${white(bold('   LinkedIn:'))}  ${linkedIn}`;
const twittering = `${white(bold('    Twitter:'))}  ${twitter}`;
const githubing = `${white(bold('     GitHub:'))}  ${github}`;
const carding = `${white(bold('       Card:'))}  ${npx}`;

let output = `${newline} ${newline} ${heading} ${newline} ${communiting} ${newline} ${newline} ${working} ${newline} ${twittering} ${newline} ${linkedining} ${newline} ${githubing} ${newline}  ${newline} ${carding} ${newline} ${newline}`;

console.log(output);
