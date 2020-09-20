/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import {Containerable} from "@material-docs/core";

export const displayName: string;

export interface ReactComponentApiPageStylesProps
    extends Containerable {
    /**
     * noGlobal - if true, global styles column will not be shown.
     * @type boolean
     */
    noGlobal?: boolean;
    /**
     * noDescription - if true, description column will not be shown.
     * @type boolean
     */
    noDescription?: boolean;
}

export default function ReactComponentApiPageStyles(props: ReactComponentApiPageStylesProps): JSX.Element;