<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">@{{ user.username }}</h1>
      <div class="user-profile__admin-badge" v-if="user.isAdmin">Admin</div>
      <div class="user-profile__follower-count">
        <strong>Followers:</strong>
        {{followers}}
      </div>
    </div>
    <div class="user-profile__tweets-wrapper">
      <TweetItem
        v-for="tweet in user.tweets"
        :key="tweet.id"
        :username="user.username"
        :tweet="tweet"
        @favorite="toggleFavorite"
      />
      <!-- @favorite == whenever this favorite event is emitted from the child, call toggleFavorite method -->
    </div>
  </div>
</template>

<script>
import TweetItem from "./TweetItem.vue";

export default {
  name: "UserProfile",
  components: { TweetItem },
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: "mRomney",
        firstName: "Mitchell",
        lastName: "Romney",
        email: "mromney@email.com",
        isAdmin: true,
        tweets: [
          { id: 1, content: "This is an example of tweet content." },
          { id: 2, content: "This is an the second example of tweet content." },
        ],
      },
    };
  },
  // watch is for watching when data change, then it will run the function in here
  watch: {
    // this followers function will run when followers data changes
    followers(newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount) {
        console.log(`${this.user.username} has gained a follwer!`);
      }
    },
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
  },
  methods: {
    followUser() {
      this.followers++;
    },
    toggleFavorite(id) {
      console.log(`Favorite Tweet #${id}`);
    },
  },
  mounted() {
    this.followUser();
  },
};
</script>

<style>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;
}

.user-profile__user-panel {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3eb;
}
.user-profile__admin-badge {
  background: rebeccapurple;
  color: white;
  border-radius: 5px;
  margin-right: auto;
  padding: 0 10px;
  font-weight: bold;
}
h1 {
  margin: 0;
}
</style>