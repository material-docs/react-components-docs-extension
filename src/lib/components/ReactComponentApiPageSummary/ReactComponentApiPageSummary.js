/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

// PropTypes validators
import PropTypes from "prop-types";


export const displayName = "RCDE-ReactComponentApiPageSummary";

const ReactComponentApiPageSummary = React.forwardRef(function (props, ref) {
    const {
        children,
    } = props;
    return children;
});

ReactComponentApiPageSummary.displayName = displayName;

ReactComponentApiPageSummary.propTypes = {
    children: PropTypes.node,
}

export default ReactComponentApiPageSummary;
