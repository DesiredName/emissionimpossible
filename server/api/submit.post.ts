export default defineEventHandler(async (event) => {
    const body = await readBody<ResultedState>(event);

    if (body != null && typeof (body.email) == 'string') {
        console.dir(body)
    }
});