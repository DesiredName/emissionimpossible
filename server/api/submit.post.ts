import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL as string
const supabaseKey = process.env.SUPABASE_KEY as string
const supabase = createClient(supabaseUrl, supabaseKey)

export default defineEventHandler(async (event) => {
    const body = await readBody<ResultedState>(event);

    if (body != null && typeof (body.email) == 'string') {
        const { error } = await supabase.from('guests').upsert({
            'email': body.email,
            'username': body.username,
            'score': body.score,
        });

        console.log(error)
    }
});