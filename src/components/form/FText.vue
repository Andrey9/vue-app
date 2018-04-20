<template>
  <div class="field">
    <label class="label" v-if="label">{{ label }}</label>
    <div class="control"
      :class="{'has-icons-left': icon, 'has-icons-right': isValid || isError}">

      <input class="input"
        :class="{'is-success': isValid, 'is-danger': isError}"
        v-validate
        :data-vv-rules="rules"
        data-vv-validate-on="blur"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        :name="name"
        @input="onInput"
        @blur="onBlur">

      <span class="icon is-small is-left" v-if="icon">
        <i class="fas" :class="icon"></i>
      </span>
      <span class="icon is-small is-right" v-if="isValid">
        <i class="fas fa-check"></i>
      </span>
      <span class="icon is-small is-right" v-if="isError">
        <i class="fas fa-times"></i>
      </span>
    </div>
    <p class="help is-danger" v-if="isError">{{ errors.first(name) }}</p>
  </div>
</template>

<script>
import { formMixin } from './common/form.mixin'

export default {
  props: {
    icon: String,
    type: {
      type: String,
      default: 'text'
    }
  },
  mixins: [formMixin]
}
</script>
