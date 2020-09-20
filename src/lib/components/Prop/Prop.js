/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

// MaterialDocs components
import TableRow from "@material-docs/core/components/TableRow";
import TableCell from "@material-docs/core/components/TableCell";

// Utilities
import {withStyles} from "@material-ui/styles";
import {withLang} from "@material-docs/core";
import usePropsSettings from "../../hooks/usePropsSettings";


export const displayName = "RCDE-Prop";

const Prop = React.forwardRef(function(props, ref) {
    const {
        name,
        type,
        def,
        children,
    } = props;
    const settings = usePropsSettings();
    return (
        <TableRow ref={ref}>
            <TableCell>{name}</TableCell>
            {settings.enableType && <TableCell>{type}</TableCell>}
            {settings.enableDefault && <TableCell>{def}</TableCell>}
            {settings.enableDescription && <TableCell>{children}</TableCell>}
        </TableRow>
    );
});

Prop.displayName = displayName;

export default withLang(withStyles({}, {name: displayName})(Prop));
