# css-to-react-native-stylesheet

Transform a css file into a React Native stylesheet. This is a command line tool that uses https://www.npmjs.com/package/css-to-react-native-transform 
to transform a file with valid CSS into a file that contains a React Native stylesheet.

Installation:

    npm i css-to-react-native-stylesheet -g

Usage: 

    transform [options] <css_file> [file_to]

Options:

    -h, --help  output usage information
    
Example usage:

    csstransform transform "D:\Testing\csstest\short.css" kittens.js

Outputs the result in the named file, or to "result.js" if no file_to is specified.
