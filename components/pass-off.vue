<template>
    <div>
        <span>Enter something</span>
        <input :style="{color: 'white'}" v-model="text" @input="$emit('updateLength', text.length)"/>
        Look here: {{myText}}
    </div>

</template>

<script>
export default {
  name: 'PassOff',
  data () {
    return {
      text: 'EXPORT'
    }
  },
  methods: {
    
  },
  computed: {

  },
  props: {
      myText: String
  }
}
</script>