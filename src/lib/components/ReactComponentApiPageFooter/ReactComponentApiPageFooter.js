/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

// PropTypes validators
import PropTypes from "prop-types";


export const displayName = "RCDE-ReactComponentApiPageFooter";

const ReactComponentApiPageFooter = React.forwardRef(function (props, ref) {
    const {
        children,
    } = props;
    return children;
});

ReactComponentApiPageFooter.displayName = displayName;

ReactComponentApiPageFooter.propTypes = {
    children: PropTypes.node,
}

export default ReactComponentApiPageFooter;
