<template>
    <div class="contact">
        <div class="row">
          <div class="col-md-4">
              <form action="">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" v-model="message.name" name="emri" id="emri" placeholder="Enter your full name" class="form-control">
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea v-model="message.body" name="message" id="message" placeholder="Enter your message" class="form-control"></textarea>
                </div>
                <button v-on:click="sendMessage()" type="button" class="btn btn-success">Send Message</button>
              </form>
          </div>
          <div class="col-md-8">
            <label>Messages</label>
            <div v-if="typeof messages[0] === 'undefined'" class="alert alert-warning" role="alert">There are no messages to show</div>
            <ul v-if="typeof messages[0] !== 'undefined'" class="list-group">
              <li v-for="(msg, index) in messages" class="list-group-item">
                <div class="row">
                  <div class="col-md-3">
                    <i style="font-size: 12px;">From:</i><br>
                    {{msg.name}}
                  </div>
                  <div class="col-md-3">
                    <i style="font-size: 12px;">Data:</i><br>
                    {{msg.date}}
                  </div>
                  <div class="col-md-6">
                    <button v-on:click="deleteMessage(index)" type="button" class="btn btn-danger btn-sm pull-right">X</button>
                    <i style="font-size: 12px;">Message:</i> <br>
                    {{msg.body}}
                  </div>
                </div>
              </li>
            </ul>
          </div>
      </div>

    </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      msg: 'Welcome to profile',
      message: {
        name: '',
        body: '',
        date: ''
      },
      messages: []
    }
  },
  methods: {
    sendMessage: function () {
      if (this.name === '' || this.message === '') {
        alert('All fields are required!')
        return
      }
      this.message.date = this.getCurrentDate()
      this.messages.push(this.message)
    },
    deleteMessage: function (index) {
      this.messages.splice(index, 1)
    },
    getCurrentDate: function () {
      let date = new Date()
      return date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() + '\n' + date.getFullYear()
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}

.list-group, form {
  text-align: left;
}
</style>
