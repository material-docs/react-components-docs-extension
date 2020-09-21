/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

// PropTypes validators
import PropTypes from "prop-types";


export const displayName = "RCDE-ReactComponentApiPageImport";

const ReactComponentApiPageImport = React.forwardRef(function (props, ref) {
    const {
        children,
    } = props;
    return children;
});

ReactComponentApiPageImport.displayName = displayName;

ReactComponentApiPageImport.propTypes = {
    children: PropTypes.node,
}

export default ReactComponentApiPageImport;
