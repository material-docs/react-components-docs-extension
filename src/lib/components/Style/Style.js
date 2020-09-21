/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {styles} from "./styles";
// MaterialDocs components
import TableRow from "@material-docs/core/components/TableRow";
import TableCell from "@material-docs/core/components/TableCell";

// PropTypes validators
import PropTypes from "prop-types";

// Utilities
import {withStyles} from "@material-ui/styles";
import {withLang} from "@material-docs/core";
import useStylesSettings from "../../hooks/useStylesSettings";
import Markdown from "@material-docs/core/components/Markdown";


export const displayName = "RCDE-Style";

const Style = React.forwardRef(function (props, ref) {
    const {
        name,
        global,
        children,
        classes,
        className,
        style,
        ...other
    } = props;
    const {enableGlobal, enableDescription, enableMarkdown} = useStylesSettings();

    const wrapInMarkdown = items => <Markdown typographyInheritSize inline>{items}</Markdown>;

    return (
        <TableRow ref={ref} className={className} style={style} {...other}>
            <TableCell>
                <span className={classes.nameLabel}>
                    {enableMarkdown ? wrapInMarkdown(name) : name}
                </span>
            </TableCell>
            {enableGlobal &&
            <TableCell>
                <span className={classes.globalLabel}>
                    {enableMarkdown ? wrapInMarkdown(global) : global}
                </span>
            </TableCell>
            }
            {enableDescription &&
            <TableCell>
                {enableMarkdown ? wrapInMarkdown(children) : children}
            </TableCell>
            }
        </TableRow>
    );
});

Style.displayName = displayName;

Style.propTypes = {
    name: PropTypes.node,
    global: PropTypes.node,
    children: PropTypes.node,
}

export default withLang(withStyles(styles, {name: displayName})(Style));
