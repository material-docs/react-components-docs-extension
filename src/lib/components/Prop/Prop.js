/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {styles} from "./styles"

// MaterialDocs components
import TableRow from "@material-docs/core/components/TableRow";
import TableCell from "@material-docs/core/components/TableCell";

// Utilities
import {withStyles} from "@material-ui/styles";
import {withLang} from "@material-docs/core";
import usePropsSettings from "../../hooks/usePropsSettings";
import Bold from "@material-docs/core/components/Bold";


export const displayName = "RCDE-Prop";

const Prop = React.forwardRef(function(props, ref) {
    const {
        name,
        type,
        def,
        children,
        classes,
        className,
        style,
        ...other
    } = props;
    const settings = usePropsSettings();
    return (
        <TableRow ref={ref} className={className} style={style} {...other}>
            <TableCell><span className={classes.nameLabel}>{name}</span></TableCell>
            {settings.enableType && <TableCell><span className={classes.typeLabel}>{type}</span></TableCell>}
            {settings.enableDefault && <TableCell><span className={classes.defaultLabel}>{def}</span></TableCell>}
            {settings.enableDescription && <TableCell>{children}</TableCell>}
        </TableRow>
    );
});

Prop.displayName = displayName;

export default withLang(withStyles(styles, {name: displayName})(Prop));
