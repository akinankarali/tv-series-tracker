<template>
  <component :is="tag" :class="size">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'CustomText',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    size: {
      type: String,
      default: 'normal',
      validator: function(value) {
        return (
          [
            'normal',
            'small',
            'xsmall',
            'xxsmall',
            'medium',
            'large',
            'xlarge',
            'xxlarge'
          ].indexOf(value) !== -1
        )
      }
    }
  }
}
</script>

<style scoped>
.small {
  font-size: 12px;
}
.xsmall {
  font-size: 11px;
}
.xxsmall {
  font-size: 10px;
}
.medium {
  font-size: 14px;
}
.large {
  font-size: 16px;
}
.xlarge {
  font-size: 18px;
}
.xxlarge {
  font-size: 20px;
}
</style>
