const state = () => ({
    posts: [],
    surveys: []
})


const mutations = {
    put(state, posts) {
        state.posts = posts
    },
    list_survey(state, surveys) {
        state.surveys = surveys
    }
}
export default { state, mutations }