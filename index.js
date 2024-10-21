#!/usr/bin/env node

const { white, bold, blueBright } = require('colorette');

const id = 'codewithowais';
const title = 'Senior Software Engineer (Javascript)';
const company = 'Looking for Remote Job!';
const name = 'Muhammad Owais Ahmed';

const work = white(`${title} @ ${blueBright(company)}`);
const twitter = blueBright(`https://twitter.com/${id}`);
const linkedIn = blueBright(`https://linkedin.com/in/${id}`);
const github = blueBright(`https://github.com/${id}`);
const npx = white('npx codewithowais');

const newline = '\n';
const heading = `${white(`              ${name} /`)} ${blueBright(id)}`;
const working = `${white(bold('       Work:'))}  ${work}`;
const linkedining = `${white(bold('   LinkedIn:'))}  ${linkedIn}`;
const twittering = `${white(bold('    Twitter:'))}  ${twitter}`;
const githubing = `${white(bold('     GitHub:'))}  ${github}`;
const carding = `${white(bold('       Card:'))}  ${npx}`;

let output = `${newline} ${newline} ${heading} ${newline} ${newline} ${newline} ${working} ${newline} ${twittering} ${newline} ${linkedining} ${newline} ${githubing} ${newline}  ${newline} ${carding} ${newline} ${newline}`;

console.log(output);
