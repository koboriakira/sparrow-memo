export const state = () => ({
  isSignedIn: false // ログインしているか
});

// ゲッター。computedのような感じで、変数が変わったときだけ再評価される。
export const getters = {
  isAuthenticated: state => !!state.isSignedIn
};

// ミューテーション。ストアの状態を変更する。コミットが必要。
export const mutations = {
  setSignInState(state, isSignedIn) {
    state.isSignedIn = isSignedIn;
  }
};

// アクション。状態を変更するのではなく、ミューテーションをコミットする。
// 任意の非同期処理を含むことができる。
export const actions = {
  async signIn({ commit }) {
    // ログイン処理。モックなので絶対に成功したことにする。
    const isSignedIn = await true;
    commit("setSignInState", isSignedIn);
  },
  signOut({ commit }) {
    commit("setSignInState", false);
  }
};
