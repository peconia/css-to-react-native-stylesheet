#!/usr/bin/env node
const transform = require("css-to-react-native-transform").default;
const program = require('commander');

program
    .version('0.0.5')
    .command('transform <css_file> [file_to]')
    .description('transform a css file into a react native stylesheet')
    .action(function (css_file, file_to) {
            handle_transformation(css_file, file_to)
        }
    );

program.parse(process.argv);

function handle_transformation(css_file, new_file_name) {
    let new_file;
    if (new_file_name) {
        new_file = new_file_name;
    } else {
        new_file = "result.js";
    }
    console.log('CSS file name is %s', css_file);

    try {
        const fs = require('fs');
        let file = fs.readFileSync(css_file, "utf8");
        let transformed = transform(file);
        const util = require('util');

        let wrapper = fs.readFileSync(__dirname + '/stylesheetWrapper.js', "utf8");

        let result = wrapper.replace("REPLACE", function () {
            return util.inspect(transformed, {compact: false, depth: 5, breakLength: 80});
        });

        fs.writeFileSync(new_file, result);
        console.log('Result file name is %s', new_file);
    } catch (err) {
        console.log("unable to finish transform, error: ", err.message);
    }
}
