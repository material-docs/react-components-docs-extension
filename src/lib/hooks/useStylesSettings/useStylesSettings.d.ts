/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

export interface StylesSettingsContext {
    /**
     * enableGlobal - if true, global styles column will be displayed.
     * @type boolean
     */
    enableGlobal: boolean;
    /**
     * enableDescription - if true, prop description column will be displayed.
     * @type boolean
     */
    enableDescription: boolean;
}

export default function useStylesSettings(): StylesSettingsContext;
