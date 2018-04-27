# css-to-react-native-stylesheet

Transform a css file into a React Native stylesheet. This is a command line tool that uses [css-to-react-native-transform](https://www.npmjs.com/package/css-to-react-native-transform) 
to transform a file with valid CSS into a file that contains a React Native stylesheet.




Installation:

    npm i css-to-react-native-stylesheet -g

Usage: 

    transform [options] <css_file> [file_to]

Options:

    -h, --help  output usage information
    
Example usage:

    csstransform transform "D:\Testing\csstest\example.css" kittens.js

Outputs the result in the named file, or to "result.js" if no file_to is specified.


Example:

    csstransform transform example.css

```example.css
.myClass {
  font-size: 18px;
  line-height: 24px;
  color: red;
}

.other {
  padding: 1rem;
}
```

is transformed to:

```result.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({ 
    myClass: { 
        fontSize: 18, 
        lineHeight: 24,
        color: 'red' 
        },
    other: { 
        paddingTop: 16, 
        paddingRight: 16, 
        paddingBottom: 16, 
        paddingLeft: 16 
        } 
});
```

