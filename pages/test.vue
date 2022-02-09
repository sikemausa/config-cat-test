<template>
  <h1>Hello!</h1>
</template>

<script>
export default {
  async middleware({ redirect, $configCatClient }) {
    const isMyFirstFeatureEnabled = await $configCatClient.getValueAsync(
      "isMyFirstFeatureEnabled",
      false
    )

    if (!isMyFirstFeatureEnabled) {
      return redirect("/")
    }
  },
}
</script>
