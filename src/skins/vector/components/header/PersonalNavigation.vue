<template>
  <div id="p-personal" role="navigation" aria-labelledby="p-personal-label">
    <h3 id="p-personal-label">Personal tools</h3>
    <ul>
      <li id="pt-anonuserpage" v-if="!$store.state.user.loggedIn">
        Not logged in
      </li>
      <li id="pt-anonuserpage" v-else>
        <a href="/wiki/On_the_Internet,_nobody_knows_you%27re_a_dog">Notadog</a>
      </li>

      <li id="pt-notifications-alert" v-if="$store.state.user.loggedIn">
        <a
          href="/wiki/Special:Notifications"
          class="mw-echo-notifications-badge mw-echo-notification-badge-nojs oo-ui-icon-bell mw-echo-unseen-notifications"
          data-counter-num="3"
          data-counter-text="3"
          title="Your alerts"
        >
          Alerts (3)
        </a>
      </li>

      <li id="pt-notifications-notice" v-if="$store.state.user.loggedIn">
        <a
          href="/wiki/Special:Notifications"
          class="mw-echo-notifications-badge mw-echo-notification-badge-nojs oo-ui-icon-tray mw-echo-notifications-badge-all-read"
          data-counter-num="0"
          data-counter-text="0"
          title="Your notices"
        >
          Notices (0)
        </a>
      </li>

      <li id="pt-anontalk">
        <a
          href="https://en.wikipedia.org/wiki/Special:MyTalk"
          title="Discussion about edits from this IP address [ctrl-option-n]"
          accesskey="n"
          >Talk</a
        >
      </li>

      <li id="pt-sandbox" v-if="$store.state.user.loggedIn">
        <a
          href="/w/index.php?title=User:Jan_drewniak_85/sandbox&amp;action=edit&amp;redlink=1&amp;preload=Template%3AUser+sandbox%2Fpreload"
          class="new"
          title="Your sandbox (page does not exist)"
        >
          Sandbox
        </a>
      </li>

      <li id="pt-preferences" v-if="$store.state.user.loggedIn">
        <a href="/wiki/Special:Preferences" title="Your preferences">
          Preferences
        </a>
      </li>

      <li id="pt-betafeatures" v-if="$store.state.user.loggedIn">
        <a
          href="/wiki/Special:Preferences#mw-prefsection-betafeatures"
          title="Beta features"
        >
          Beta
        </a>
      </li>

      <li id="pt-watchlist" v-if="$store.state.user.loggedIn">
        <a
          href="/wiki/Special:Watchlist"
          title="The list of pages you are monitoring for changes [ctrl-option-L]"
          accesskey="L"
        >
          Watchlist
        </a>
      </li>

      <li id="pt-anoncontribs">
        <a
          href="https://en.wikipedia.org/wiki/Special:MyContributions"
          title="A list of edits made from this IP address [ctrl-option-y]"
          accesskey="y"
          >Contributions</a
        >
      </li>
      <li id="pt-createaccount" v-if="!$store.state.user.loggedIn">
        <a
          href="https://en.wikipedia.org/w/index.php?title=Special:CreateAccount&amp;returnto=Main+Page"
          title="You are encouraged to create an account and log in; however, it is not mandatory"
          >Create account</a
        >
      </li>
      <li id="pt-login" v-if="!$store.state.user.loggedIn">
        <a
          v-on:click="$store.dispatch('user/setLoggedIn', true)"
          href="#loggedin"
          title="You&#39;re encouraged to log in; however, it&#39;s not mandatory. [ctrl-option-o]"
          accesskey="o"
          >Log in</a
        >
      </li>
      <li v-else>
        <a
          v-on:click="$store.dispatch('user/setLoggedIn', false)"
          href="#"
          accesskey="o"
          >Log out</a
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
#pt-notifications-alert .mw-echo-notifications-badge,
#pt-notifications-notice .mw-echo-notifications-badge {
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  margin: 0 2px;
  top: -5px;
  text-indent: -9999px;
  border-radius: 2px;
  cursor: pointer;
  text-decoration: none;
  line-height: normal;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  opacity: 0.87;
}

.oo-ui-icon-bell,
.mw-ui-icon-bell:before {
  background-image: linear-gradient(transparent, transparent),
    url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E %3Ctitle%3E bell %3C/title%3E %3Cpath d=%22M16 7a5.38 5.38 0 0 0-4.46-4.85C11.6 1.46 11.53 0 10 0S8.4 1.46 8.46 2.15A5.38 5.38 0 0 0 4 7v6l-2 2v1h16v-1l-2-2zm-6 13a3 3 0 0 0 3-3H7a3 3 0 0 0 3 3z%22/%3E %3C/svg%3E");
}

.oo-ui-icon-tray,
.mw-ui-icon-tray:before {
  background-image: linear-gradient(transparent, transparent),
    url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E %3Ctitle%3E tray %3C/title%3E %3Cpath d=%22M3 1a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm14 12h-4l-1 2H8l-1-2H3V3h14z%22/%3E %3C/svg%3E");
}

#pt-notifications-alert
  .mw-echo-notifications-badge.mw-echo-notifications-badge-all-read,
#pt-notifications-notice
  .mw-echo-notifications-badge.mw-echo-notifications-badge-all-read {
  opacity: 0.51;
}

#p-personal #pt-notifications-alert,
#p-personal #pt-notifications-notice {
  margin-right: 0.4em;
}

#pt-notifications-alert .mw-echo-notifications-badge:after,
#pt-notifications-notice .mw-echo-notifications-badge:after {
  position: absolute;
  display: inline-block;
  cursor: pointer;
  top: 9px;
  text-indent: 0;
  left: 55%;
  font-size: 0.9em;
  font-weight: bold;
  padding: 0 0.3em;
  border: 1px solid #fff;
  border-radius: 2px;
  background-color: #72777d;
  content: attr(data-counter-text);
  color: #fff;
}
</style>
