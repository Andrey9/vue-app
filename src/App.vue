<template>
  <div id="app">
    <div class="container fluid">
      <f-text v-model="email"
        label="Email"
        name="email"
        placeholder="Enter your email"
        icon="fa-envelope"
        rules="required|email"/>

      <f-text v-model="name"
        label="Name"
        name="name"
        placeholder="Enter your name"
        rules="required|min:3"/>

      <f-textarea v-model="message"
        name="message"
        label="Message"
        rules="required|min:3"
        placeholder="Enter your message"/>
    </div>
  </div>
</template>

<script>
import FText from './components/form/FText'
import FTextarea from './components/form/FTextarea'

export default {
  name: 'App',
  components: {
    FText,
    FTextarea
  },
  data () {
    return {
      email: '',
      name: '',
      message: ''
    }
  }
}
</script>
