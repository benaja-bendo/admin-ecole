/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_MODE: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}