/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import Table from "@material-docs/core/components/Table";
import TableHead from "@material-docs/core/components/TableHead";
import TableBody from "@material-docs/core/components/TableBody";
import TableRow from "@material-docs/core/components/TableRow";
import TableCell from "@material-docs/core/components/TableCell";
import {withLang} from "@material-docs/core";
import {withStyles} from "@material-ui/styles";
import {PropsSettingsContext} from "../../hooks/usePropsSettings/usePropsSettings";

export const displayName = "RCDE-ReactComponentApiPageProps";

const ReactComponentApiPageProps = React.forwardRef(function(props, ref) {
    const {
        noType = false,
        noDefault = false,
        noDescription = false,
        children,
    } = props;
    const {lang} = props.lang;
    const locale = lang.locale.extensions.ReactComponentsDocsExtension.DocsComponentApiPage;
    return (
        <PropsSettingsContext.Provider
            value={{enableType: !noType, enableDefault: !noDefault, enableDescription: !noDescription}}
        >
            <Table size={"small"} ref={ref}>
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

export default withLang(ReactComponentApiPageProps);