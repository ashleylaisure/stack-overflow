const ROUTES = {
    HOME: '/',
    LANDING_PAGE: '/landing-page',
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',
    FORGOT_PASSWORD: '/forgot-password',
    ASK_QUESTION: '/ask-question',
    QUESTIONS: '/questions',
    QUESTION_DETAIL: (id: string) => `/questions/${id}`,
    PROFILE: '/profile',
    EDIT_PROFILE: '/profile/edit',
    SETTINGS: '/settings',
    NOT_FOUND: '/404',
};

export default ROUTES;
