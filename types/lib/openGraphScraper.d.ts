import type { OpenGraphScraperOptions } from './types.js';
/**
 * sets up options for the fetch request and calls extract on html
 *
 * @param {object} options - options for ogs
 * @return {object} object with ogs results
 *
 */
export default function setOptionsAndReturnOpenGraphResults(ogsOptions: OpenGraphScraperOptions): Promise<{
    ogObject: import("./types.js").OgObjectInternal;
    response: {
        body: string;
    };
    html: string;
} | {
    ogObject: import("./types.js").OgObjectInternal;
    response: import("undici").Response;
    html: string;
}>;
