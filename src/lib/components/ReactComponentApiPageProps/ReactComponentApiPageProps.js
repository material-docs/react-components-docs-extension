/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

// MaterialDocs components
import Table from "@material-docs/core/components/Table";
import TableHead from "@material-docs/core/components/TableHead";
import TableBody from "@material-docs/core/components/TableBody";
import TableRow from "@material-docs/core/components/TableRow";
import TableCell from "@material-docs/core/components/TableCell";

// PropTypes validators
import PropTypes from "prop-types";

// Utilities
import {withLang} from "@material-docs/core";
import {PropsSettingsContext} from "../../hooks/usePropsSettings/usePropsSettings";


export const displayName = "RCDE-ReactComponentApiPageProps";

const ReactComponentApiPageProps = React.forwardRef(function(props, ref) {
    const {
        noType = false,
        noDefault = false,
        noDescription = false,
        enableMarkdown = false,
        children,
        className,
        style,
        ...other
    } = props;
    const {lang} = props.lang;
    const locale = lang.locale.extensions.ReactComponentsDocsExtension.DocsComponentApiPage;

    return (
        <PropsSettingsContext.Provider
            value={{enableType: !noType, enableDefault: !noDefault, enableDescription: !noDescription, enableMarkdown}}
        >
            <Table ref={ref} className={className} style={style} {...other}>
                <TableHead>
                    <TableRow>
                        <TableCell>{locale.props.name}</TableCell>
                        <TableCell>{locale.props.type}</TableCell>
                        <TableCell>{locale.props.default}</TableCell>
                        <TableCell>{locale.props.description}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {children}
                </TableBody>
            </Table>
        </PropsSettingsContext.Provider>
    );
});

ReactComponentApiPageProps.displayName = displayName;

ReactComponentApiPageProps.defaultProps = {
    noType: false,
    noDefault: false,
    noDescription: false,
    enableMarkdown: false,
}

ReactComponentApiPageProps.propTypes = {
    noType: PropTypes.bool,
    noDefault: PropTypes.bool,
    noDescription: PropTypes.bool,
    enableMarkdown: PropTypes.bool,
    children: PropTypes.node,
}

export default withLang(ReactComponentApiPageProps);
