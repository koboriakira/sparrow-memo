import firebase from '~/plugins/firebase'

const auth = firebase.auth()

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
  async signIn({
    commit
  }) {
    try {
      // Google認証プロバイダを使ってポップアップ形式でサインインする。
      // Providerを変えれば他のサービスでも認証可能らしい。
      const provider = new firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider).then(ret => {
        commit("setSignInState", true);

        // ログインに成功したらトップページへリダイレクト
        this.$router.push("/");
      }).catch(error => {
        console.error(error);
      })
    } catch (error) {
      console.error(error)
    }
  },
  async setSignedIn({
    commit
  }, signedIn) {
    console.log("user/setSignedIn");
    await commit("setSignInState", signedIn);
  },
  async signOut({
    commit
  }) {
    await auth.signOut().then(() => {
      commit("setSignInState", false);

      // ログアウトに成功したらログインページへリダイレクト
      this.$router.push("login");
    })
  }
};
