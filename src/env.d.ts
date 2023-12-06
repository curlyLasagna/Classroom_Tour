interface ImportMetaEnv {
    readonly SUPABASE_URL: string
    readonly SUPABASE_ANON_KEY: string
    readonly HUGGING_FACE_KEY: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }