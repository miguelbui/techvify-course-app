import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'techvify-course-app',
    paths: ['search', 'course.filter'],
  })(store)
}
