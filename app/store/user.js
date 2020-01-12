export const state = () => ({
  isSignedIn: true // ログインしているか
});

// ゲッター。computedのような感じで、変数が変わったときだけ再評価される。
export const getters = {
  isAuthenticated: state => !!state.isSignedIn
};
