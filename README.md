# Open Source Arms Library

Access this project here: [https://opensourcearmslibrary.netlify.app/](https://opensourcearmslibrary.netlify.app/)

- Current version: V3

## Description

This application presents data from an open-source library of
research pertaining to the manufacture of arms and arms' components
known to be used in U.S. imperialist wars.

### Technologies

- React
- React Leaflet JS

### Instructions to Incorporate New Data to This App

1. Add the file with a .json extension to "./src/Data/weapons/"
2. Make sure the JSON is formatted in conformity with the structure of the other .json files contained in the "weapons" folder. Pay extra mind to respect the exact data structures so that the app can properly access their properties without having to be rewritten. A null entry, for example, might need to appear within an array and not as a string. Look closely at any of the other .json files for guidance on proper formatting. Don't introduce bugs to the app by introducing irregularities.
3. Go to "./src/Data/arms-data.js". Declare a const variable with the camelCased name of the weapon and require its .json file into Node via its relative file path. There are several ready examples at the top of "arms-data.js" to imitate. Please keep the code orderly--variables are ordered in that file alphabetically to make it easy in the future to find what you're looking for.
4. Finally, add the variable to the weaponsArray being exported at the bottom of the page.

That's it! The app as coded will take care of both adding the marker to the map (if the .json file has the coordinates listed correctly) and dynamically displaying the data associated with that manufacturing location.

### License

MIT License

Copyright (c) 2024 Addy López

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

### Proper Use of Data

All weapons data contained within files with a .json extension in this repository under "./src/Data/weapons/" are provided courtesy of the organization [Open Source Arms Library (OSAL)](https://www.opensourcearmslibrary.org/). To use the data or contribute to the library, email OSAL for permission or more information at [abq4palestine@proton.me](abq4palestine@proton.me).
