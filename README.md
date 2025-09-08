# Emission:Impossible app

## Prereq:
1. node lts
2. supabase account (will need DB URL and Admin key)
3. Vercel account
4. GitHub acconunt

## Setup:
npm install

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deploy to services:
1. Login to GitHub
2. Upload repoistory
3. Login to Supabse
4. Create a new project on the Supabase dashboard and open it
5. Goto DB Settings > DataAPI and store the 'Project URL'
6. Goto DB Settings > API Key and save 'Legacy API Key' -> 'service_role'
7. Goto DB Table editor
  - Create new Table with the name 'guests'
  - Add column: 'username' of type 'varchar' none-nullable
  - Add column: 'email' of type 'varchar' none-nullable
  - Add column: 'score' of type 'int4' none-nullable
  - Save changes
8. Goto Vercel account
9. Create 'New Project' from 'github' account, where sourcecode is located
10. Goto project settings 'Environment Variables'
    - Add variable 'SUPABASE_URL' with the value of 'Project URL' from Supabase setup
    - Add variable 'SUPABASE_KEY' with the value of 'service_role' from Supabase setup
    - Save
11. Redeploy project on Vercel
12. Open Vercel project url ({project_name}.vercel.app) from the dashboard

## Test deployment
1. Start the game
2. Type 'username' and 'email' on welcome screen
3. Press the 'Start Game' button
4. Answer all questions
5. On score screen remeber the final score (3/5, 2/5, 5/5 etc, the 'score' value is the first figure)
6. Press the 'Goto Final Test' button
7. Goto Supabase project
8. Open table 'guests'
9. Verify that table contains the test data you provided: 'username', 'email' and 'score' should match 
