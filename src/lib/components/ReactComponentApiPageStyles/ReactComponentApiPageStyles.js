/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import withLang from "@material-docs/core/HOCs/withLang";
import Table from "@material-docs/core/components/Table";
import TableRow from "@material-docs/core/components/TableRow";
import TableCell from "@material-docs/core/components/TableCell";
import TableHead from "@material-docs/core/components/TableHead";
import TableBody from "@material-docs/core/components/TableBody";
import {StylesSettingsContext} from "../../hooks/useStylesSettings/useStylesSettings";

export const displayName = "RCDE-ReactComponentApiPageStyles";

const ReactComponentApiPageStyles = React.forwardRef(function (props, ref) {
    const {
        noGlobal = false,
        noDescription = false,
        children,
    } = props;
    const {lang} = props.lang;
    const locale = lang.locale.extensions.ReactComponentsDocsExtension.DocsComponentApiPage;

    return (
        <StylesSettingsContext.Provider
            value={{enableGlobal: !noGlobal, enableDescription: !noDescription}}
        >
            <Table ref={ref}>
                <TableHead>
                    <TableRow>
                        <TableCell>{locale.styles.name}</TableCell>
                        <TableCell>{locale.styles.global}</TableCell>
                        <TableCell>{locale.styles.description}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {children}
                </TableBody>
            </Table>
        </StylesSettingsContext.Provider>
    );
});

ReactComponentApiPageStyles.displayName = displayName;

export default withLang(ReactComponentApiPageStyles);