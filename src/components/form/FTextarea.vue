<template>
  <div class="field">
    <label class="label" v-if="label">{{ label }}</label>
    <div class="control">
      <textarea class="textarea"
        :class="{'is-success': isValid, 'is-danger': isError}"
        :name="name"
        v-validate
        :data-vv-rules="rules"
        data-vv-validate-on="blur"
        :placeholder="placeholder"
        :value="value"
        @input="onInput"
        @blur="onBlur">
      </textarea>
    </div>
    <p class="help is-danger" v-if="isError">{{ errors.first(name) }}</p>
  </div>
</template>

<script>
import { formMixin } from './common/form.mixin'

export default {
  mixins: [formMixin]
}
</script>
