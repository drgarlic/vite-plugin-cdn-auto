import { Plugin } from 'vite'

export interface Options {
    /**
     * Provider
     * default: 'skypack'
     */
    provider?: string

    /**
     * Locked versions
     * default: {}
     */
    locked?: object
}

declare function createPlugin(options?: Options): Plugin

export default createPlugin
