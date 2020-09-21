/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020. 
 */

import {Containerable, Stylable} from "@material-docs/core";

export const displayName: string;

export interface ReactComponentApiPagePropsProps
    extends Containerable, Stylable {
    /**
     * noType - if true, type column will not be shown.
     * @type boolean
     */
    noType?: boolean,
    /**
     * noDefault - if true, default value column will not be shown.
     * @type boolean
     */
    noDefault?: boolean,
    /**
     * noDescription - if true, description column will not be shown.
     * @type boolean
     */
    noDescription?: boolean,
}

export default function ReactComponentApiPageProps(props: ReactComponentApiPagePropsProps): JSX.Element;
