/// <reference types="vite/client" />


declare global {
    function test(name: string, fn: () => void | Promise<void>): void;
}