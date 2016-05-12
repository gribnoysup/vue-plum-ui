<template>
<i v-bind:class="iconClass"></i>
</template>

<script>
import '../../assets/icons/plum.font';

export default {
  props : ['icon'],
  computed : {
    iconClass () {
      let cls = 'plum-ic';
      if (this.icon !== '') cls += ` plum-${this.icon}`;
      return cls.trim();
    }
  }
};
</script>

<style>
.plum-ic {
  display: inline-block;
}
</style>
