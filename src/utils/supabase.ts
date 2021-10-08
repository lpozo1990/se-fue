import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.VUE_APP_SUPABASE_URL as string || "https://lvcldgplihaoeuprrdly.supabase.co",
  process.env.VUE_APP_SUPABASE_KEY as string || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMzcwNTA2MCwiZXhwIjoxOTQ5MjgxMDYwfQ._jUJvNcoELtCSHqtjb43tgRExYJaoTcEJKs_tzZ2wQ4"
)