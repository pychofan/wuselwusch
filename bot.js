const Discord = require('discord.js');
const client = new Discord.Client();
var CONFIG = require('./config/config.json');
var token = CONFIG.token;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
client.on('message', msg => {
var channel = msg.member.guild.channels.find('name', 'commands') ;
if (msg.channel.id === channel.id ) {
if (msg.content === 'Add Role') {
  console.log('Role Added to: '+msg.member.user.username) ;
  var role = msg.member.guild.roles.find('name', 'member') ;
  msg.pin() ;
  msg.delete(1200);
  msg.reply('Role: '+role+' Added');
  msg.member.addRole(role) ;
}
}
}) ;

client.on('message', msg => {
var channel = msg.member.guild.channels.find('name', 'commands') ;
if (msg.channel.id === channel.id ) {
if (msg.content === 'Remove Role') {
  console.log('Role Removed From: '+msg.member.user.username) ;
  var role = msg.member.guild.roles.find('name', 'member') ;
  msg.delete(600);
  msg.reply('Role: '+role+' Removed');
  msg.member.removeRole(role) ;
}
}
}) ;

client.login(token);
