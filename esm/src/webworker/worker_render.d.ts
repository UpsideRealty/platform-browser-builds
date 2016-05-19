import { MessageBus } from '../web_workers/shared/message_bus';
export { WORKER_RENDER_STARTABLE_MESSAGING_SERVICE } from './worker_render_common';
/**
 * Wrapper class that exposes the Worker
 * and underlying {@link MessageBus} for lower level message passing.
 */
export declare class WebWorkerInstance {
    worker: Worker;
    bus: MessageBus;
    /** @internal */
    init(worker: Worker, bus: MessageBus): void;
}
/**
 * An array of providers that should be passed into `application()` when initializing a new Worker.
 */
export declare const WORKER_RENDER_APPLICATION_PROVIDERS: Array<any>;
