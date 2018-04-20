export const formMixin = {
  props: {
    label: String,
    placeholder: String,
    value: String,
    rules: String,
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    onInput (event) {
      this.$emit('input', event.target.value)
    },
    onBlur (event) {
      this.$emit('blur', event.target.value)
    }
  },
  computed: {
    isValid () {
      if (!this.fields[this.name]) {
        return false
      }
      return this.fields[this.name].valid
    },
    isError () {
      return this.errors.has(this.name)
    }
  }
}
