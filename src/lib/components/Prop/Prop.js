/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {styles} from "./styles"

// MaterialDocs components
import TableRow from "@material-docs/core/components/TableRow";
import TableCell from "@material-docs/core/components/TableCell";
import Markdown from "@material-docs/core/components/Markdown";

// PropTypes validators
import PropTypes from "prop-types";

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
    const {enableType, enableDefault, enableDescription, enableMarkdown} = usePropsSettings();

    const wrapInMarkdown = items => <Markdown typographyInheritSize inline>{items}</Markdown>;

    return (
        <TableRow ref={ref} className={className} style={style} {...other}>
            <TableCell>
                <span className={classes.nameLabel}>
                    {enableMarkdown ? wrapInMarkdown(name) : name}
                </span>
            </TableCell>
            {enableType &&
            <TableCell>
                <span className={classes.typeLabel}>
                    {enableMarkdown ? wrapInMarkdown(type) : type}
                </span>
            </TableCell>
            }
            {enableDefault &&
            <TableCell>
                <span className={classes.defaultLabel}>
                    {enableMarkdown ? wrapInMarkdown(def) : def}
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

Prop.displayName = displayName;

Prop.propTypes = {
    name: PropTypes.node,
    type: PropTypes.node,
    def: PropTypes.node,
    children: PropTypes.node,
}

export default withLang(withStyles(styles, {name: displayName})(Prop));
