import { GenericBrowserDomAdapter } from './generic_browser_adapter';
export declare class LogAdapter {
    logError(error: string): void;
    log(error: string): void;
    logGroup(error: string): void;
    logGroupEnd(): void;
}
/**
 * A `DomAdapter` powered by full browser DOM APIs.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
export declare class BrowserDomAdapter extends GenericBrowserDomAdapter {
    parse(templateHtml: string): void;
    static makeCurrent(): void;
    hasProperty(element: Node, name: string): boolean;
    setProperty(el: Node, name: string, value: any): void;
    getProperty(el: Node, name: string): any;
    invoke(el: Node, methodName: string, args: any[]): any;
    logError(error: string): void;
    log(error: string): void;
    logGroup(error: string): void;
    logGroupEnd(): void;
    readonly attrToPropMap: any;
    query(selector: string): any;
    querySelector(el: Element, selector: string): HTMLElement;
    querySelectorAll(el: any, selector: string): any[];
    on(el: Node, evt: any, listener: any): void;
    onAndCancel(el: Node, evt: any, listener: any): Function;
    dispatchEvent(el: Node, evt: any): void;
    createMouseEvent(eventType: string): MouseEvent;
    createEvent(eventType: any): Event;
    preventDefault(evt: Event): void;
    isPrevented(evt: Event): boolean;
    getInnerHTML(el: HTMLElement): string;
    getTemplateContent(el: Node): Node;
    getOuterHTML(el: HTMLElement): string;
    nodeName(node: Node): string;
    nodeValue(node: Node): string;
    type(node: HTMLInputElement): string;
    content(node: Node): Node;
    firstChild(el: Node): Node;
    nextSibling(el: Node): Node;
    parentElement(el: Node): Node;
    childNodes(el: any): Node[];
    childNodesAsList(el: Node): any[];
    clearNodes(el: Node): void;
    appendChild(el: Node, node: Node): void;
    removeChild(el: Node, node: Node): void;
    replaceChild(el: Node, newChild: Node, oldChild: Node): void;
    remove(node: Node): Node;
    insertBefore(el: Node, node: Node): void;
    insertAllBefore(el: Node, nodes: Node[]): void;
    insertAfter(el: Node, node: any): void;
    setInnerHTML(el: Element, value: string): void;
    getText(el: Node): string;
    setText(el: Node, value: string): void;
    getValue(el: any): string;
    setValue(el: any, value: string): void;
    getChecked(el: any): boolean;
    setChecked(el: any, value: boolean): void;
    createComment(text: string): Comment;
    createTemplate(html: any): HTMLElement;
    createElement(tagName: string, doc?: Document): HTMLElement;
    createElementNS(ns: string, tagName: string, doc?: Document): Element;
    createTextNode(text: string, doc?: Document): Text;
    createScriptTag(attrName: string, attrValue: string, doc?: Document): HTMLScriptElement;
    createStyleElement(css: string, doc?: Document): HTMLStyleElement;
    createShadowRoot(el: HTMLElement): DocumentFragment;
    getShadowRoot(el: HTMLElement): DocumentFragment;
    getHost(el: HTMLElement): HTMLElement;
    clone(node: Node): Node;
    getElementsByClassName(element: any, name: string): HTMLElement[];
    getElementsByTagName(element: any, name: string): HTMLElement[];
    classList(element: any): any[];
    addClass(element: any, className: string): void;
    removeClass(element: any, className: string): void;
    hasClass(element: any, className: string): boolean;
    setStyle(element: any, styleName: string, styleValue: string): void;
    removeStyle(element: any, stylename: string): void;
    getStyle(element: any, stylename: string): string;
    hasStyle(element: any, styleName: string, styleValue?: string): boolean;
    tagName(element: any): string;
    attributeMap(element: any): Map<string, string>;
    hasAttribute(element: Element, attribute: string): boolean;
    hasAttributeNS(element: Element, ns: string, attribute: string): boolean;
    getAttribute(element: Element, attribute: string): string;
    getAttributeNS(element: Element, ns: string, name: string): string;
    setAttribute(element: Element, name: string, value: string): void;
    setAttributeNS(element: Element, ns: string, name: string, value: string): void;
    removeAttribute(element: Element, attribute: string): void;
    removeAttributeNS(element: Element, ns: string, name: string): void;
    templateAwareRoot(el: Node): any;
    createHtmlDocument(): HTMLDocument;
    defaultDoc(): HTMLDocument;
    getBoundingClientRect(el: Element): any;
    getTitle(): string;
    setTitle(newTitle: string): void;
    elementMatches(n: any, selector: string): boolean;
    isTemplateElement(el: Node): boolean;
    isTextNode(node: Node): boolean;
    isCommentNode(node: Node): boolean;
    isElementNode(node: Node): boolean;
    hasShadowRoot(node: any): boolean;
    isShadowRoot(node: any): boolean;
    importIntoDoc(node: Node): any;
    adoptNode(node: Node): any;
    getHref(el: Element): string;
    getEventKey(event: any): string;
    getGlobalEventTarget(target: string): EventTarget;
    getHistory(): History;
    getLocation(): Location;
    getBaseHref(): string;
    resetBaseElement(): void;
    getUserAgent(): string;
    setData(element: Element, name: string, value: string): void;
    getData(element: Element, name: string): string;
    getComputedStyle(element: any): any;
    setGlobalVar(path: string, value: any): void;
    supportsWebAnimation(): boolean;
    performanceNow(): number;
    supportsCookies(): boolean;
    getCookie(name: string): string;
    setCookie(name: string, value: string): void;
}
export declare function parseCookieValue(cookieStr: string, name: string): string;
