/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

export interface PropsSettingsContext {
    /**
     * enableType - if true, prop type column will be displayed.
     * @type boolean
     */
    enableType: boolean;
    /**
     * enableDefault - if true, prop default value column will be displayed.
     * @type boolean
     */
    enableDefault: boolean;
    /**
     * enableDescription - if true, prop description column will be displayed.
     * @type boolean
     */
    enableDescription: boolean;
    /**
     * enableMarkdown - if true, children text will be wrapped in Markdown component.
     * @type boolean
     */
    enableMarkdown: false,
}

export default function usePropsSettings(): PropsSettingsContext;
