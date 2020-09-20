<div align="center">
    <img alt="Material Docs logo" src="https://github.com/DanilAndreev/material-docs/blob/master/images/MaterialDocsLogoOverview.png"/>
</div>
<div align="center">
</div>

# Material Docs - React components API extension
### An official extension for the Material Docs documentation framework.
This _extension_ designed to help to create API pages for ___React___ components. It includes __props__ and __styles__ tables and other info blocks. 
## Installation.
With __npm__:  
```
npm install @material-docs/react-components-docs-extension
```
With __yarn__:  
```
yarn add @material-docs/react-components-docs-extension
```
[Read installation guide]()
## Usage
```jsx
<ReactComponentApiPage name={"Docs Api page"}>
    <ReactComponentApiPageSummary>
        <H3>The API documentation of the React component.</H3>
    </ReactComponentApiPageSummary>
    <ReactComponentApiPageImport>
        <Code theme={"darcula"}>
            import Component from "./lib/MyComponent";  
            import {Component} from "./lib";
        </Code>
        <Markdown>
            You can learn more about the difference by [reading this guide](https://...).
        </Markdown>
    </ReactComponentApiPageImport>
    <ReactComponentApiPageProps>
        <Prop name={"children"} type={"node"} def={"null"}>Children of an element</Prop>
        <Prop name={"name"} type={"string"} def={"\"\""}>Your name</Prop>
    </ReactComponentApiPageProps>
    <ReactComponentApiPageStyles>
        <Style name={"root"} global={"Mui-root"}>Styles applied to the root element</Style>
        <Style name={"link"} global={"Mui-link"}>Styles applied to the link element</Style>
    </ReactComponentApiPageStyles>
    <ReactComponentApiPageFooter>
        More information...
    </ReactComponentApiPageFooter>
</ReactComponentApiPage>
```
[Explore the docs]()
## Support
You can ask for support by email: help.materialdocs@gmail.com

## Author
Danil Andreev | danssg08@gmail.com | https://github.com/DanilAndreev
