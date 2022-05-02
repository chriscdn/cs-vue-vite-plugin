<template>
  <KApp>
    <KMulti v-model="scope">
      <template #default="{ index }">
        <KTextArea v-model="scope[index]" :error-messages="errors.abc" />
      </template>
    </KMulti>
    <br />
    <div>{{ scope }}</div>

    <KDialog :z-index="100">
      <template #activator="{ on }">
        <button @click="on">click</button></template
      >
      <KCard>
        <KTextArea> adsfasdf </KTextArea>
      </KCard>
    </KDialog>
  </KApp>
</template>

<script>
export default {
  data() {
    return {
      scope: [2000, 2000],
      errors: {
        abc: ['aaaa'],
      },
    }
  },
}
</script>
