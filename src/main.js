import { createApp } from 'vue'
import App from './App.vue'

// import ActorItem from './components/ActorItem.vue';

const app = createApp(App);

// Register the ActorItem component with the app
// ActorItem is a global component
// So it is available throughout the application
// app.component('actor-item', ActorItem);

app.mount('#app')
