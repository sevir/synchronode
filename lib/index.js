var chokidar = require('chokidar');
var program = require('commander');
var rsync = require("rsyncwrapper").rsync;
var fs = require('fs');



program
	.version('0.0.1')
	.option('-c, --config [file]', 'Load configuration from a config file')
	.option('-d, --dump_config' , 'Prints an example config file')
	.parse(process.argv);

if (program.dump_config){
	console.log("dump");
	process.exit();
}

if (program.config){
	try{
		var conf = fs.readFileSync(program.config).toString();
		var conf = JSON.parse(conf.replace(/\/\*[\*]?(.|\n)+?\*\//g,""));
		
		console.log(conf);
	}catch(e){
		console.log(e);
	}
}else{
	program.help();
}