/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {styles} from "./styles";

// MaterialDocs components
import TableRow from "@material-docs/core/components/TableRow";
import TableCell from "@material-docs/core/components/TableCell";

// Utilities
import {withStyles} from "@material-ui/styles";
import {withLang} from "@material-docs/core";
import useStylesSettings from "../../hooks/useStylesSettings";

export const displayName = "RCDE-Style";

const Style = React.forwardRef(function(props, ref) {
    const {
        name,
        global,
        children,
        classes,
        className,
        style,
        ...other
    } = props;
    const settings = useStylesSettings();
    return (
        <TableRow ref={ref} className={className} style={style} {...other}>
            <TableCell>{name}</TableCell>
            {settings.enableGlobal && <TableCell><span className={classes.globalLabel}>{global}</span></TableCell>}
            {settings.enableDescription && <TableCell>{children}</TableCell>}
        </TableRow>
    );
});

Style.displayName = displayName;

export default withLang(withStyles(styles, {name: displayName})(Style));
